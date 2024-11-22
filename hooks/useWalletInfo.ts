import { useWalletInfo } from '@reown/appkit/react';

// Define the type for walletInfo
interface WalletInfo {
  address: string | null;
  balance: number | null;
  network: string | null;
}

export default function handleWalletInfo() {
  const { walletInfo } = useWalletInfo();

  if (!walletInfo) {
    console.log("No wallet information available");
    return;
  }

  // Process walletInfo
  console.log("Wallet Address:", walletInfo.address);
  console.log("Wallet Balance:", walletInfo.balance);
  console.log("Wallet Network:", walletInfo.network);
}
