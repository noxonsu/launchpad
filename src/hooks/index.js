import { useEffect, useState } from 'react'
import { useWeb3React } from './useWeb3ReactShim'

export { useWeb3React }

export function useActiveWeb3React() {
  // With wagmi, there's only one context — return it directly
  return useWeb3React()
}

/**
 * Eager connect is handled by wagmi's reconnect() called in appkit.js.
 * This hook just returns true immediately so Web3ReactManager doesn't block rendering.
 */
export function useEagerConnect() {
  const [tried, setTried] = useState(false)

  useEffect(() => {
    // wagmi + AppKit handle reconnect automatically via reconnect(wagmiConfig)
    setTried(true)
  }, [])

  return tried
}

/**
 * Inactive listener: watches for chainChanged / accountsChanged on window.ethereum
 * (covers bridge mode and MetaMask injected).
 * wagmi handles this internally for connected wallets; this is a fallback.
 */
export function useInactiveListener(suppress = false) {
  useEffect(() => {
    const { ethereum } = window
    if (ethereum && ethereum.on && !suppress) {
      const handleChainChanged = () => {
        // wagmi reacts automatically; just log
        console.debug('[useInactiveListener] chainChanged')
      }
      const handleAccountsChanged = (accounts) => {
        console.debug('[useInactiveListener] accountsChanged', accounts)
      }

      ethereum.on('chainChanged', handleChainChanged)
      ethereum.on('accountsChanged', handleAccountsChanged)

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('chainChanged', handleChainChanged)
          ethereum.removeListener('accountsChanged', handleAccountsChanged)
        }
      }
    }
    return undefined
  }, [suppress])
}
