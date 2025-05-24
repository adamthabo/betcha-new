import React from "react";

export function WalletDisplay() {
  // Placeholder wallet value
  const credits = 420;

  return (
    <div className="bg-gray-800 px-4 py-2 rounded-xl text-yellow-400 font-semibold">
      {credits} credits
    </div>
  );
}
