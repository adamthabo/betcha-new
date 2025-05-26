import React from "react";
import { BetFeed } from "../components/BetFeed";
import { WalletDisplay } from "../components/WalletDisplay";
import { AvatarDropdown } from "../components/AvatarDropdown";
import { MakeBetForm } from "../components/MakeBetForm";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Top bar */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
        <h1 className="text-3xl font-bold tracking-wide">
          bet<span className="text-yellow-400">cha.</span>
        </h1>
        <div className="flex items-center space-x-4">
          <WalletDisplay />
          <AvatarDropdown />
        </div>
      </div>

      {/* Main interaction buttons */}
      <div className="flex justify-center space-x-6 py-12">
        <button className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-2xl text-xl hover:scale-105 transition">
          Make a Bet
        </button>
        <button className="bg-gray-700 text-white font-bold py-4 px-8 rounded-2xl text-xl hover:scale-105 transition">
          Take a Bet
        </button>
        <button className="bg-red-600 text-white font-bold py-4 px-8 rounded-2xl text-xl hover:scale-105 transition">
          Settle a Bet
        </button>
      </div>

      {/* Make a Bet Form */}
      <MakeBetForm />

      {/* Scrollable feed */}
      <div className="px-6 mt-10">
        <div className="overflow-y-auto h-[400px] relative">
          <div className="absolute top-0 h-6 w-full bg-gradient-to-b from-black to-transparent z-10" />
          <BetFeed />
          <div className="absolute bottom-0 h-6 w-full bg-gradient-to-t from-black to-transparent z-10" />
        </div>
      </div>
    </div>
  );
}
