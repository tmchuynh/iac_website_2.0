import React from "react";
import { useRouter } from "next/navigation";

const CannotFind: React.FC = () => {
  const router = useRouter();
  return (
    <main className="flex flex-col justify-center items-center mx-auto -mt-28 w-10/12 md:w-11/12 h-svh">
      <h1 className="mb-4 font-bold text-4xl">Page Not Found</h1>
      <p className="mb-6 text-gray-600 text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded text-white"
      >
        Go Back to Homepage
      </button>
    </main>
  );
};

export default CannotFind;
