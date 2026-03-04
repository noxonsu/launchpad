import { Checkbox } from "@mui/material";
import { useWeb3React } from '../hooks/useWeb3ReactShim';
import React, { useState } from "react";
import CreateLaunchpad from "../components/Button/createLaunchpad";
import CreateLocker from "../components/Button/createLocker";
import LockerList from "../components/Modal/lockerList";
import LongIdoList from "../components/Modal/longIdoList";
import { useApplicationContext } from "../context/applicationContext";
import * as s from "../styles/global";

const Account = () => {
  const { account } = useWeb3React();
  const [showZero, setShowZero] = useState(0);

  const {
    domainSettings: {
      isLockerEnabled
    },
    IDOFactoryLoaded,
    IDOFactoryOwner,
    IDOFactoryOnlyOwnerCreate,
    
    TokenFactoryLoaded,
    TokenFactoryOwner,
    TokenFactoryOnlyOwnerCreate,

  } = useApplicationContext()

  if (!account) {
    return (
      <s.Container ai="center">
        <s.TextTitle>Account</s.TextTitle>
        <s.TextDescription>Please login</s.TextDescription>
      </s.Container>
    );
  }

  const canCreateIDO = (IDOFactoryLoaded && (!IDOFactoryOnlyOwnerCreate || (IDOFactoryOnlyOwnerCreate && IDOFactoryOwner.toLowerCase() == account.toLowerCase())))

  const canCreateLock = (TokenFactoryLoaded && (!TokenFactoryOnlyOwnerCreate || (TokenFactoryOnlyOwnerCreate && TokenFactoryOwner.toLowerCase() == account.toLowerCase())))

  
  const handleShowZero = (e) => {
    setShowZero(!showZero);
  };

  return (
    <s.Container ai="center">
      <s.TextTitle>Account</s.TextTitle>
      <s.SpacerMedium />
      <s.Container fd="row" jc="space-between">
        <s.Container flex={1}>
          {IDOFactoryLoaded ? (
            <>
              <s.Container fd="row" ai="center" jc="space-between">
                <s.TextTitle style={{ flex: 1, whiteSpace: "nowrap", margin: 20 }}>
                  My IDO
                </s.TextTitle>
                {canCreateIDO && (<CreateLaunchpad />)}
              </s.Container>
              {canCreateIDO && (<LongIdoList />)}
              {!canCreateIDO && (
                <s.Container ai="center">
                  <s.Text warning small>
                    {`Creating new IDO Pools is not allowed for your account`}
                  </s.Text>
                </s.Container>
              )}
            </>
          ) : (
            <s.Container ai="center">
              <s.Text info small>
                {`Loading IDO Factory info...`}
              </s.Text>
            </s.Container>
          )}
        </s.Container>

        {
          isLockerEnabled &&
          <s.Container flex={1}>
            {TokenFactoryLoaded ? (
              <>
                <s.Container fd="row" ai="center" jc="space-between">
                  <s.TextTitle style={{ flex: 1, whiteSpace: "nowrap", margin: 20 }}>
                    My Locker
                  </s.TextTitle>
                  {canCreateLock && (<CreateLocker />)}
                </s.Container>
                {!canCreateLock && (
                  <s.Container ai="center">
                    <s.Text warning small>
                      {`Creating new TokenLock is not allowed for your account`}
                    </s.Text>
                  </s.Container>
                )}
                <s.Container fd="row" flex={1}>
                  <s.Container flex={4}></s.Container>
                  <s.Container flex={2} ai="center" fd="row" jc="center">
                    <s.TextDescription>show zero?</s.TextDescription>
                    <Checkbox value={showZero} onChange={handleShowZero} />
                  </s.Container>
                </s.Container>
                <LockerList showZero={showZero} showUserLockers />
              </>
            ) : (
              <s.Container ai="center">
                <s.Text info small>
                  {`Loading TokenLocker Factory info...`}
                </s.Text>
              </s.Container>
            )}
          </s.Container>
        }
      </s.Container>
    </s.Container>
  );
};

export default Account;
