/**
 * Launchpad — Reown AppKit + Wagmi v2 initialization
 *
 * Replaces @web3-react/core + @walletconnect/web3-provider.
 * Exposes wagmiAdapter and wagmiConfig for WagmiProvider wrapping,
 * and the AppKit modal for wallet connection.
 *
 * NOTE: This module is skipped entirely in bridge mode.
 * When window.__bridgeActive === true, wallet-bridge-init.js sets
 * window.ethereum to the MCW bridge provider directly.
 */

import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, bsc, polygon, arbitrum } from '@reown/appkit/networks'
import { reconnect } from 'wagmi/actions'

const projectId = 'a23677c4af3139b4eccb52981f76ad94'

// Read theme from URL param — MCW sends ?theme=light or ?theme=dark to iframe
const urlTheme = new URLSearchParams(window.location.search).get('theme')
const themeMode = urlTheme === 'light' ? 'light' : 'dark'

const appkitNetworks = [mainnet, bsc, polygon, arbitrum]

export const wagmiAdapter = new WagmiAdapter({
  networks: appkitNetworks,
  projectId,
})

export const wagmiConfig = wagmiAdapter.wagmiConfig

export const modal = createAppKit({
  adapters: [wagmiAdapter],
  networks: appkitNetworks,
  projectId,
  metadata: {
    name: 'IDO Launchpad',
    description: 'Token IDO Launchpad',
    url: 'https://launchpad.onout.org',
    icons: ['https://launchpad.onout.org/favicon.ico'],
  },
  themeMode,
  features: {
    analytics: false,
    email: false,
    socials: false,
  },
})

// Restore previous wallet session from localStorage
reconnect(wagmiConfig)

// Expose modal globally so WalletModal component and bridge-init.js can call modal.open()
if (typeof window !== 'undefined') {
  window.__wcModal = modal
}

export default modal
