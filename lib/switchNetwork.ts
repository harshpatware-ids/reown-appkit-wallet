import { createAppKit } from '@reown/appkit/react'
import { mainnet, arbitrum, polygon } from '@reown/appkit/networks'

const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, arbitrum],
  metadata: metadata,
  features: {
    analytics: true,
  }
})

modal.switchNetwork(polygon)