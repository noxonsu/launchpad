/**
 * Compatibility shim: emulates @web3-react/core's useWeb3React API
 * using wagmi v2 hooks and Reown AppKit.
 *
 * This allows existing components that call useWeb3React() to keep working
 * without a full rewrite.
 *
 * Bridge mode: when window.__bridgeActive === true, accounts/chainId still
 * come from wagmi because the bridge sets window.ethereum before wagmi
 * initialises reconnect(), so it picks up the bridge provider automatically.
 */

import { useAccount, useChainId, usePublicClient, useWalletClient } from 'wagmi'
import { Web3Provider } from '@ethersproject/providers'
import { useMemo } from 'react'

/**
 * Returns a Web3Provider-like "library" object compatible with ethers v5 API
 * (getBalance, getSigner, etc.) backed by the wagmi wallet client or public client.
 */
function useLibrary() {
  const { data: walletClient } = useWalletClient()
  const publicClient = usePublicClient()

  return useMemo(() => {
    // Prefer wallet client (has signer) when connected
    const eip1193Provider = walletClient
      ? {
          request: ({ method, params }) => walletClient.request({ method, params }),
        }
      : publicClient
      ? {
          request: ({ method, params }) => publicClient.request({ method, params }),
        }
      : null

    if (!eip1193Provider) return null

    try {
      const provider = new Web3Provider(eip1193Provider, 'any')
      provider.pollingInterval = 15000
      return provider
    } catch {
      return null
    }
  }, [walletClient, publicClient])
}

/**
 * Drop-in replacement for useWeb3React() from @web3-react/core v6.
 *
 * Returns: { active, account, chainId, library, activate, deactivate, error, connector }
 */
export function useWeb3React() {
  const { address, isConnected, connector } = useAccount()
  const chainId = useChainId()
  const library = useLibrary()

  const active = isConnected && !!address

  // activate / deactivate are no-ops in AppKit — use modal.open() / modal.disconnect()
  // They're kept here so existing call-sites don't throw.
  const activate = () => {
    console.warn('[Web3Shim] activate() called — use modal.open() instead')
  }
  const deactivate = () => {
    if (window.__wcModal) {
      window.__wcModal.disconnect().catch(() => {})
    }
  }

  return {
    active,
    account: address ?? null,
    chainId,
    library,
    connector: connector ?? null,
    error: null,
    activate,
    deactivate,
  }
}

/**
 * NetworkContextName stub — useWeb3React(NetworkContextName) is used in a
 * few places; we return the same data (no separate network context needed).
 */
export const NetworkContextName = 'NETWORK'
