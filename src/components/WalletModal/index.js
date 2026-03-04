/**
 * WalletModal — redesigned for Reown AppKit + wagmi v2
 *
 * External API is unchanged: { isOpen, closeModal }
 *
 * - When isOpen becomes true, we open the AppKit modal (or bridge connect)
 *   and close our own MUI Dialog immediately so AppKit takes over.
 * - In bridge mode (window.__bridgeActive) AppKit is not used;
 *   bridge provider is already set on window.ethereum.
 * - Account view (when already connected) is still rendered as MUI Dialog
 *   so the user can disconnect.
 */
import { useWeb3React } from '../../hooks/useWeb3ReactShim';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as Close } from '../../assets/images/x.svg'
import { Dialog, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useApplicationContext } from '../../context/applicationContext'
import * as s from "../../styles/global";

const CloseIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`

const CloseColor = styled(Close)`
  path {
    stroke: white;
  }
`

const HeaderRow = styled.div`
  flex-flow: row nowrap;
  padding: 1rem 1rem;
  font-weight: 500;
  color: 'inherit';
`

const ContentWrapper = styled.div`
  background-color: #232227;
  padding: 1rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

const UpperSection = styled.div`
  position: relative;
  h5 { margin: 0 0 0.5rem; font-size: 1rem; font-weight: 400; }
  h5:last-child { margin-bottom: 0; }
  h4 { margin-top: 0; font-weight: 500; }
`

const AccountGroupingRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  color: var(--text);
  div { display: flex; flex-flow: row nowrap; align-items: center; }
`

const AccountControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 0;
  width: 100%;
  font-weight: 500;
  font-size: 1.3rem;
  p { min-width: 0; margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
`

const InfoCard = styled.div`
  padding: 1rem;
  border: 1px solid var(--secondary-color);
  border-radius: 20px;
  position: relative;
  display: grid;
  grid-row-gap: 12px;
  margin-bottom: 20px;
`

export default function WalletModal(props) {
  const { isOpen, closeModal } = props

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const { active, account, deactivate } = useWeb3React()
  const { isAppConfigured } = useApplicationContext()

  useEffect(() => {
    if (!isOpen) return

    // If already connected, show the account dialog (rendered below)
    if (active && account) return

    // In bridge mode window.ethereum is the bridge — no AppKit modal
    if (window.__bridgeActive) {
      console.log('[WalletModal] Bridge mode active — connect handled by bridge provider')
      closeModal()
      return
    }

    // Open AppKit modal and close our own dialog
    if (window.__wcModal) {
      window.__wcModal.open()
    } else {
      // Fallback: try direct window.ethereum (MetaMask)
      if (window.ethereum) {
        window.ethereum.request({ method: 'eth_requestAccounts' }).catch(console.error)
      }
    }
    closeModal()
  }, [isOpen, active, account, closeModal])

  // Auto-close when account becomes connected
  useEffect(() => {
    if (account && isOpen) {
      closeModal()
    }
  }, [account, isOpen, closeModal])

  // Show account info dialog when already connected and modal is opened
  if (active && account && isOpen) {
    return (
      <Dialog open={isOpen} onClose={closeModal} fullScreen={fullScreen}>
        <UpperSection>
          <CloseIcon onClick={closeModal}>
            <CloseColor />
          </CloseIcon>
          <HeaderRow>Account</HeaderRow>
          <ContentWrapper>
            <InfoCard>
              <AccountGroupingRow>
                <div style={{ fontSize: '0.825rem', color: 'var(--secondary-color)' }}>
                  Connected
                </div>
                <div>
                  <s.button
                    secondary
                    style={{ padding: '4px 6px', fontSize: '.825rem', fontWeight: 400, marginRight: '8px' }}
                    onClick={() => {
                      deactivate()
                      closeModal()
                    }}
                  >
                    Disconnect
                  </s.button>
                  <s.button
                    secondary
                    style={{ padding: '4px 6px', fontSize: '.825rem', fontWeight: 400 }}
                    onClick={() => {
                      if (window.__wcModal) window.__wcModal.open()
                      closeModal()
                    }}
                  >
                    Change
                  </s.button>
                </div>
              </AccountGroupingRow>
              <AccountGroupingRow>
                <AccountControl>
                  <p>{account}</p>
                </AccountControl>
              </AccountGroupingRow>
            </InfoCard>
          </ContentWrapper>
        </UpperSection>
      </Dialog>
    )
  }

  return null
}
