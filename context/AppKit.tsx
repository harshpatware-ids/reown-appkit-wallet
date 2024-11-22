 'use client'

import { createAppKit } from '@reown/appkit/react'
import { Ethers5Adapter } from '@reown/appkit-adapter-ethers5'
import { mainnet, arbitrum } from '@reown/appkit/networks'
import App from "../app/page"
// 1. Get projectId at https://cloud.reown.com
const projectId = 'f6cb9a41d52d86c9f0f94facfe8ab997'

// 2. Create a metadata object
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

// 3. Create the AppKit instance
createAppKit({
  adapters: [new Ethers5Adapter()],
  metadata: metadata,
  networks: [mainnet, arbitrum],
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export function AppKit() {
  return (
    < App/> //make sure you have configured the <appkit-button> inside
  )
}