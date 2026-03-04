import { useState } from 'react';
import { useWeb3React } from '../../hooks/useWeb3ReactShim';

import WalletModal from '../WalletModal';

import * as s from "../../styles/global";
import { shortenAddress } from '../../utils/utils';


export function Web3Status() {
  const {
    active,
    account,
  } = useWeb3React();

  const [isWaleltModalOpen, setIsWaleltModalOpen] = useState(false);

  return (
    <>
      <s.Container ai="center">
        {account == null ? (
          <s.button
            onClick={() => {
              setIsWaleltModalOpen(true);
            }}
          >
            CONNECT
          </s.button>
        ) : (
          <s.button
            className="address text-collapse"
            onClick={() => {
              setIsWaleltModalOpen(true);
            }}
          >
            {shortenAddress(account)}
          </s.button>
        )}
      </s.Container>
      <WalletModal isOpen={isWaleltModalOpen} closeModal={()=> setIsWaleltModalOpen(false)} />
    </>
  );
}
