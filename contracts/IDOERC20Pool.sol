// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./openzeppelin/contracts/access/Ownable.sol";
import "./openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./openzeppelin/contracts/utils/math/SafeMath.sol";
import "./openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./openzeppelin/contracts/token/ERC20/ERC20.sol";

contract IDOERC20Pool is Ownable, ReentrancyGuard {
    using SafeMath for uint256;
    using SafeERC20 for ERC20;

    struct FinInfo {
        uint256 tokenPrice; // one token in erc20pay WEI
        uint256 softCap;
        uint256 hardCap;
        uint256 minPayment;
        uint256 maxPayment;
        uint256 listingPrice; // one token in WEI
        uint256 lpInterestRate;
    }

    struct Timestamps {
        uint256 startTimestamp;
        uint256 endTimestamp;
        uint256 unlockTimestamp;
    }

    struct UserInfo {
        uint debt;
        uint total;
        uint totalInvested;
    }

    ERC20 public rewardToken;
    uint256 public decimals;

    ERC20 public payToken;
    uint256 public payTokenDecimals;

    string public metadataURL;

    FinInfo public finInfo;
    Timestamps public timestamps;

    uint256 public totalInvested;
    uint256 public tokensForDistribution;
    uint256 public distributedTokens;

    bool public distributed = false;

    bool public allowRefund = true;
    bool public allowSoftWithdraw = false;

    mapping(address => UserInfo) public userInfo;

    uint256 public contractType = 2;
    
    event TokensDebt(
        address indexed holder,
        uint256 payAmount,
        uint256 tokenAmount
    );

    event TokensWithdrawn(address indexed holder, uint256 amount);
    
    address public factory;
    
    function setAllowRefund(bool newVal) public onlyOwner {
        allowRefund = newVal;
    }

    function setAllowSoftWithdraw(bool newVal) public onlyOwner {
        allowSoftWithdraw = newVal;
    }

    constructor(
        ERC20 _rewardToken,
        ERC20 _payToken,
        FinInfo memory _finInfo,
        Timestamps memory _timestamps,
        string memory _metadataURL
    ) {
        factory = msg.sender;
        rewardToken = _rewardToken;
        decimals = rewardToken.decimals();

        payToken = _payToken;
        payTokenDecimals = payToken.decimals();
        
        finInfo = _finInfo;

        setTimestamps(_timestamps);

        setMetadataURL(_metadataURL);
    }

    function setTimestamps(Timestamps memory _timestamps) internal {
        require(
            _timestamps.startTimestamp < _timestamps.endTimestamp,
            "Start timestamp must be less than finish timestamp"
        );
        require(
            _timestamps.endTimestamp > block.timestamp,
            "Finish timestamp must be more than current block"
        );

        timestamps = _timestamps;
    }

    function setMetadataURL(string memory _metadataURL) public{
        metadataURL = _metadataURL;
    }

    function pay(uint256 amount) external {
        require(block.timestamp >= timestamps.startTimestamp, "Not started");
        require(block.timestamp < timestamps.endTimestamp, "Ended");

        require(amount >= finInfo.minPayment, "Less then min amount");
        require(amount <= finInfo.maxPayment, "More then max amount");
        require(totalInvested.add(amount) <= finInfo.hardCap, "Overfilled");

        UserInfo storage user = userInfo[msg.sender];
        require(user.totalInvested.add(amount) <= finInfo.maxPayment, "More then max amount");
        // @to-do - check allowance

        uint256 tokenAmount = getTokenAmount(amount, finInfo.tokenPrice);
        require(tokenAmount > 0, "Amount too small");

        payToken.safeTransferFrom(msg.sender, address(this), amount);

        totalInvested = totalInvested.add(amount);
        tokensForDistribution = tokensForDistribution.add(tokenAmount);
        user.totalInvested = user.totalInvested.add(amount);
        user.total = user.total.add(tokenAmount);
        user.debt = user.debt.add(tokenAmount);

        emit TokensDebt(msg.sender, amount, tokenAmount);
    }

    function refund() external {
        require(allowRefund, "Refund not enabled");
        require(block.timestamp > timestamps.endTimestamp, "The IDO pool has not ended.");
        require(totalInvested < finInfo.softCap, "The IDO pool has reach soft cap.");

        UserInfo storage user = userInfo[msg.sender];

        uint256 _amount = user.totalInvested;
        require(_amount > 0 , "You have no investment.");

        user.debt = 0;
        user.totalInvested = 0;
        user.total = 0;

        payToken.safeTransfer(msg.sender, _amount);
    }

    /// @dev Allows to claim tokens for the specific user.
    /// @param _user Token receiver.
    function claimFor(address _user) external {
        proccessClaim(_user);
    }

    /// @dev Allows to claim tokens for themselves.
    function claim() external {
        proccessClaim(msg.sender);
    }

    /// @dev Proccess the claim.
    /// @param _receiver Token receiver.
    function proccessClaim(
        address _receiver
    ) internal nonReentrant{
        require(block.timestamp > timestamps.endTimestamp, "The IDO pool has not ended.");
        if (!allowSoftWithdraw) {
            require(totalInvested >= finInfo.softCap, "The IDO pool did not reach soft cap.");
        }

        UserInfo storage user = userInfo[_receiver];

        uint256 _amount = user.debt;
        require(_amount > 0 , "You do not have debt tokens.");

        user.debt = 0;
        distributedTokens = distributedTokens.add(_amount);
        rewardToken.safeTransfer(_receiver, _amount);
        emit TokensWithdrawn(_receiver,_amount);
    }

    function withdraw() external onlyOwner {
        if (!allowSoftWithdraw) {
            require(block.timestamp > timestamps.endTimestamp, "The IDO pool has not ended.");
            require(totalInvested >= finInfo.softCap, "The IDO pool did not reach soft cap.");
            require(!distributed, "Already distributed.");
        }

        uint256 balance = payToken.balanceOf(address(this));

        payToken.safeTransfer(msg.sender, balance);

        if (!allowSoftWithdraw) distributed = true;
    }

     function withdrawNotSoldTokens() external onlyOwner {
        require(block.timestamp > timestamps.endTimestamp, "The IDO pool has not ended.");
        if (!allowSoftWithdraw) {
            require(distributed, "Withdraw allowed after distributed.");
        }

        uint256 balance = getNotSoldToken();
        require(balance > 0, "The IDO pool has not unsold tokens.");
        rewardToken.safeTransfer(msg.sender, balance);
    }

    function getNotSoldToken() public view returns(uint256){
        uint256 balance = rewardToken.balanceOf(address(this));
        return balance.add(distributedTokens).sub(tokensForDistribution);
    }

    function refundTokens() external onlyOwner {
        require(block.timestamp > timestamps.endTimestamp, "The IDO pool has not ended.");
        require(totalInvested < finInfo.softCap, "The IDO pool has reach soft cap.");

        uint256 balance = rewardToken.balanceOf(address(this));
        require(balance > 0, "The IDO pool has not refund tokens.");
        rewardToken.safeTransfer(msg.sender, balance);
    }


    function getTokenAmount(
        uint256 amount,
        uint256 rate
    ) internal view returns (uint256) {
        return (
            rate
            * ((decimals > 0) ? 10**decimals : 1)
            * amount
        ) / ((payTokenDecimals > 0) ? 10**payTokenDecimals : 1);
    }
    /**
     * @notice It allows the owner to recover wrong tokens sent to the contract
     * @param _tokenAddress: the address of the token to withdraw with the exception of rewardToken
     * @param _tokenAmount: the number of token amount to withdraw
     * @dev Only callable by owner.
     */
    function recoverWrongTokens(address _tokenAddress, uint256 _tokenAmount) external onlyOwner {
        require(_tokenAddress != address(rewardToken));
        ERC20(_tokenAddress).safeTransfer(address(msg.sender), _tokenAmount);
    }
}