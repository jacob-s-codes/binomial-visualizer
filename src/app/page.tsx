"use client";
import { useState } from "react";

export default function Home() {
  const [k, setK] = useState(0);
  const [p, setP] = useState(0);
  const [n, setN] = useState(0);
  const [ans, setAns] = useState(0);

  function factorial(x: number): number {
    if (x === 0 || x === 1) return 1;
    let result = 1;
    for (let i = 2; i <= x; i++) {
      result *= i;
    }
    return result;
  }

  function nChooseK(n: number, k: number): number {
    if (k > n) {
      return 0;
    }
    return factorial(n) / (factorial(k) * factorial(n - k));
  }

  function binomialProbability(n: number, k: number, p: number): number {
    const choose = nChooseK(n, k);
    const success = Math.pow(p, k);
    const failure = Math.pow(1 - p, n - k);
    return choose * success * failure;
  }

  function submit() {
    const result = binomialProbability(n, k, p);
    setAns(result);
  }

  // console.log(n + " " + k + " " + p);

  return (
    <div className="mx-8 my-8 text-white">
      <p>K value (number of successes):</p>
      <input
        type="number"
        className="bg-white text-black"
        value={k}
        onChange={(e) => setK(Number(e.target.value))}
      />
      <p>N value (number of trials):</p>
      <input
        type="number"
        className="bg-white text-black"
        value={n}
        onChange={(e) => setN(Number(e.target.value))}
      />
      <p>P value (probability of success):</p>
      <input
        type="number"
        step="0.01"
        className="bg-white text-black"
        value={p}
        onChange={(e) => setP(Number(e.target.value))}
      />
      <br />
      <button className="mt-4 bg-gray-600 hover:bg-gray-400 px-4 py-2" onClick={submit}>
        Submit
      </button>
      <div className="mt-4">
        Result: {ans.toFixed(5)}
      </div>
    </div>
  );
}
