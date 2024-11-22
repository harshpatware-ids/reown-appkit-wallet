import { useAppKitAccount, useAppKitProvider, useAppKitNetwork  } from '@reown/appkit/react'
import { ethers } from 'ethers'
import { useAppKitProvider } from '@reown/appkit/react'

function Components() {
  const { walletProvider } = useAppKitProvider('eip155')
  const { address } = useAppKitAccount()
  const { chainId } = useAppKitNetwork()

  async function onSignMessage() {
    const provider = new ethers.providers.Web3Provider(walletProvider, chainId)
    const signer = provider.getSigner(address)
    const signature = await signer?.signMessage('Hello AppKit Ethers')
    console.log(signature)
  }

  return <button onClick={() => onSignMessage()}>Sign Message</button>
}