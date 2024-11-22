import { useAppKitAccount, useAppKitProvider, useAppKitNetwork } from '@reown/appkit/react';
import { ethers } from 'ethers';

const Components = () => {
  const { walletProvider } = useAppKitProvider('eip155');
  const { address } = useAppKitAccount();
  const { chainId } = useAppKitNetwork();

  const onSignMessage = async () => {
    // Ensure all necessary values are available
    if (!walletProvider || !address || !chainId) {
      console.error("Missing provider, address, or chainId");
      return;
    }

    try {
      // Creating Web3Provider using the walletProvider and chainId
      const provider = new ethers.providers.Web3Provider(walletProvider, chainId);
      const signer = provider.getSigner();
      
      if (!signer) {
        console.error("Signer is undefined");
        return;
      }

      // Signing a message
      const signature = await signer.signMessage('Hello AppKit Ethers');
      console.log('Message signed:', signature);
    } catch (error) {
      console.error('Error signing message:', error);
    }
  };

  return (
    <button onClick={onSignMessage}>
      Sign Message
    </button>
  );
};

export default Components;
