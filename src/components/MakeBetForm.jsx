import React, { useState } from "react";
import { supabase } from "../lib/supabase";

export function MakeBetForm() {
  const [description, setDescription] = useState("");
  const [userA, setUserA] = useState("");
  const [userB, setUserB] = useState("");
  const [arbiter, setArbiter] = useState("");
  const [amount, setAmount] = useState(10);
  const [status, setStatus] = useState("pending");
  const [success, setSuccess] = useState(false);

  async function submitBet(e) {
    e.preventDefault();

    const { error } = await supabase.from("wagers2").insert([
      {
        user_a: userA,
        user_b: userB,
        arbiter: arbiter,
        description: description,
        amount: amount,
        status: status,
      },
    ]);

    if (!error) {
      setSuccess(true);
      setDescription("");
      setUserA("");
      setUserB("");
      setArbiter("");
      setAmount(10);
      setTimeout(() => setSuccess(false), 2000);
    } else {
      console.error("Insert error:", error.message);
    }
  }

  return (
    <form onSubmit={submitBet} className="bg-gray-900 p-6 rounded-xl max-w-md mx-auto mt-10 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Make a Bet</h2>
      <input className="w-full mb-2 p-2 rounded bg-gray-800 text-white" value={userA} onChange={e => setUserA(e.target.value)} placeholder="Your Name (User A)" required />
      <input className="w-full mb-2 p-2 rounded bg-gray-800 text-white" value={userB} onChange={e => setUserB(e.target.value)} placeholder="Opponent (User B)" required />
      <input className="w-full mb-2 p-2 rounded bg-gray-800 text-white" value={arbiter} onChange={e => setArbiter(e.target.value)} placeholder="Arbiter" required />
      <input className="w-full mb-2 p-2 rounded bg-gray-800 text-white" value={description} onChange={e => setDescription(e.target.value)} placeholder="Bet Description" required />
      <input className="w-full mb-4 p-2 rounded bg-gray-800 text-white" type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} placeholder="Amount" required />
      <button className="w-full bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-300" type="submit">
        Submit Bet
      </button>
      {success && <p className="text-green-400 mt-4 text-sm">Bet submitted successfully!</p>}
    </form>
  );
}
