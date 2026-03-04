import React from "react";
import LockTokenForm from "../components/Form/lockTokenForm";
import * as s from "../styles/global";
import { useApplicationContext } from "../context/applicationContext"
import { useWeb3React } from '../hooks/useWeb3ReactShim';

const LockToken = () => {
  const { account } = useWeb3React()
  const {
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
  
  const canCreateLock = (TokenFactoryLoaded && (!TokenFactoryOnlyOwnerCreate || (TokenFactoryOnlyOwnerCreate && TokenFactoryOwner.toLowerCase() == account.toLowerCase())))

  return (
    <s.Container ai="center">
      <s.TextTitle></s.TextTitle>
      <s.SpacerMedium />
      {TokenFactoryLoaded ? (
        <>
          {canCreateLock && (<LockTokenForm />)}
          {!canCreateLock && (
            <s.Text warning>
              {`Creating new TokenLock is not allowed for your account`}
            </s.Text>
          )}
        </>
      ) : (
        <s.Text info small>{`Loading...`}</s.Text>
      )}
    </s.Container>
  );
};

export default LockToken;
