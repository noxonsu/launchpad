import React from "react";
import PublishForm from "../components/Form/Publish/publishForm";
import * as s from "../styles/global";
import { useApplicationContext } from "../context/applicationContext"
import { useWeb3React } from '../hooks/useWeb3ReactShim';

const Publish = () => {
  const { account } = useWeb3React()
  const {
    IDOFactoryLoaded,
    IDOFactoryOwner,
    IDOFactoryOnlyOwnerCreate,
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

  return (
    <s.Container ai="center">
      <s.TextTitle></s.TextTitle>
      <s.SpacerMedium />
      {IDOFactoryLoaded ? (
        <>
          {canCreateIDO && (<PublishForm></PublishForm>)}
          {!canCreateIDO && (
            <s.Text warning>
              {`Creating new IDO Pools is not allowed for your account`}
            </s.Text>
          )}
        </>
      ) : (
        <s.Text info small>{`Loading...`}</s.Text>
      )}
    </s.Container>
  );
};

export default Publish;
