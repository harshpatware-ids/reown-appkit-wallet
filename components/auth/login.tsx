import React from "react";
 const LoginPage = () => {
 
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <p className="text-sm text-center text-gray-600 mb-4">
          Choose a method to sign in:
        </p>
        <button
           className="w-full py-2 px-4 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Continue with Google
        </button>
        <button
           className="w-full py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-900"
        >
          Continue with GitHub
        </button>
      </div>
    </div>
  );
};
export default LoginPage