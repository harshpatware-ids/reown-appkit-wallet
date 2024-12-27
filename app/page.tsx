"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected, address } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      router.push(`/dashboard?address=${address}`);
    }
  }, [isConnected, address, router]);

  return (
    <main
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-black to-blue-900 relative overflow-hidden"
    >
      {/* Background 3D Graphics */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-[url('/path-to-3d-blockchain-bg.jpg')] bg-cover bg-center opacity-30 w-full h-full"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500 opacity-30 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500 opacity-30 blur-3xl rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-lg w-full p-8 bg-white rounded-2xl shadow-3xl border border-gray-300 relative z-10">
        <h1 className="text-4xl font-extrabold text-center font-serif text-gray-900 mb-6">
          Explore the Decentralized Wallets
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Connect your wallet and explore the password-free logins .
        </p>

        {!isConnected ? (
          <div className="text-center">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-1 rounded-xl shadow-lg">
              <div className="bg-white rounded-lg p-6">
                <div className="flex justify-center">
                  <w3m-button label="Login To Dashboard"/>
                </div>
                <h3 className="text-md font-medium text-gray-500 mt-4">
                  Let’s Get Started, Connect Your Wallet
                </h3>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium text-gray-700">
                Wallet Connected
              </h3>
              <p className="text-gray-500 text-sm">Address: {address}</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Select Network
              </h3>
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-xl shadow-lg">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-center">
                    <w3m-network-button />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
