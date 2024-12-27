"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

export default function Dashboard() {
  const router = useRouter();
  const { isConnected, address } = useAccount();

  // Placeholder for user name and profile image
  const userName = "John Doe";
  const profileImage = "/profile.jpg"; // Replace with actual image URL

  // Redirect to login page if disconnected
  useEffect(() => {
    if (!isConnected) {
      router.push("/");
    }
  }, [isConnected, router]);

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-white via-blue-50 to-white text-gray-800 relative">
      {/* Background Graphics */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500 opacity-80 -z-10"></div>

      {/* Navigation Bar */}
      <nav className="flex justify-end items-center px-8 py-4 bg-white bg-opacity-20  shadow-md z-20">
        <div className="flex items-center space-x-4">
          <img
            src="./profile.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full shadow-lg"
          />
          <span className="text-blue-800 font-semibold text-lg">
            {userName}
          </span>
        </div>
      </nav>

      {/* Content */}
      <div className="flex flex-row items-center justify-between flex-grow">
        {/* Right Section: Welcome Text */}
        <div className="flex flex-col max-w-3xl w-full p-8 m-16 mb-72 text-white z-10">
          <h2 className="text-5xl font-bold mb-4 text-shadow-md">
            Welcome to the Dashboard
          </h2>
          <p className="text-xl mb-6 text-shadow-md text-white">
            Explore now and unlock the full potential of secure, decentralized wallet management. Seamlessly manage your assets, ensure top-tier security, and take control of your digital finances like never before.
          </p>
          <button className="flex mr-auto px-6 py-3 mt-8 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Left Section: Form */}
        <div className="flex flex-col justify-center items-start max-w-xl w-full p-8 bg-white rounded-2xl shadow-xl relative z-10 m-16">
          <h1 className="text-4xl font-extrabold mb-6 text-blue-800">
            Welcome to Your Dashboard
          </h1>
          <p className="text-lg text-blue-800 mb-8">
            Manage your decentralized wallet with ease and explore secure, password-free login options.
          </p>

          <div className="bg-blue-100 p-6 rounded-lg w-full">
            {address ? (
              <p className="text-lg text-center">
                Connected Wallet Address:{" "}
                <span className="font-mono text-green-600">{address}</span>
              </p>
            ) : (
              <p className="text-lg text-center text-red-500">
                No wallet connected.
              </p>
            )}

            <div className="flex justify-center mt-4">
              <w3m-button />
            </div>

            {isConnected && (
              <div className="grid bg-blue-50 border border-blue-200 rounded-lg overflow-hidden shadow-sm mt-6">
                <h3 className="text-sm font-semibold bg-blue-100 text-center p-2">
                  Network Selection
                </h3>
                <div className="flex justify-center items-center p-4">
                  <w3m-network-button />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
