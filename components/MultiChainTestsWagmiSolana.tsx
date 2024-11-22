import * as React from 'react'
import { useAppKitState } from '@reown/appkit/react'

import { Ethers5Tests } from './Ethers/Ethers5Tests'
// import { WagmiTests } from './Wagmi/WagmiTests'
import { AppKitNetworkInfo } from './AppKitNetworkInfo'

export function MultiChainTestsWagmiSolana() {
  const { activeChain } = useAppKitState()

  return (
    <>
      <AppKitNetworkInfo />
      {activeChain === 'ether5' ? <Ethers5Tests /> : null}
      {/* {activeChain === 'solana' ? <SolanaTests /> : null} */}
    </>
  )
}
