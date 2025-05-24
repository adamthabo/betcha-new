import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export function BetFeed() {
  const [bets, setBets] = useState([]);

  useEffect(() => {
    async function fetchBets() {
      const { data, error } = await supabase.from("wagers2").select("*").order("created_at", { ascending: false });
      if (!error) setBets(data);
    }

    fetchBets();
  }, []);

  return (
    <div className="space-y-4 relative z-20">
      {bets.map((bet) => (
        <div key={bet.id} className="bg-gray-800 p-4 rounded-xl shadow">
          <div className="text-sm text-gray-400">{bet.created_at}</div>
          <div className="text-lg font-semibold">{bet.description}</div>
          <div className="flex justify-between text-sm mt-1 text-gray-300">
            <span>{bet.user_a} vs {bet.user_b}</span>
            <span>{bet.amount} credits</span>
          </div>
        </div>
      ))}
    </div>
  );
}
