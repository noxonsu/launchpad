/**
 * Web3ReactManager — updated for wagmi v2 / Reown AppKit
 *
 * Previously blocked rendering until @web3-react eagerly connected.
 * With wagmi, reconnect() is called in appkit.js, and wagmi hooks
 * hydrate asynchronously. We simply render children immediately since
 * wagmi handles the connection state internally.
 */
import React from 'react'
import { useEagerConnect } from '../../hooks'

export default function Web3ReactManager({ children }) {
  // useEagerConnect now just returns true immediately (wagmi handles reconnect)
  const tried = useEagerConnect()

  if (!tried) {
    return null
  }

  return <>{children}</>
}
