import { useAppKitAccount } from "@reown/appkit/react";

// Define the type for the return value of the hook
interface AppKitAccount {
  address: string | null;
  isConnected: boolean;
  caipAddress: string | null;
  status: string | null;
}

export default function useAccountInfo() {
   const { address, isConnected, caipAddress, status } = useAppKitAccount() as AppKitAccount;

  
  // Return the data or perform other actions based on the account info
  return {
    address,
    isConnected,
    caipAddress,
    status,
  };
}
