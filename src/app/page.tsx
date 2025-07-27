"use client";
import { useState } from "react";

export default function Home() {

  const [k, setK] = useState(0);
  const [p, setP] = useState(0);
  const [n, setN] = useState(0);
  const [ans, setAns] = useState(0);

  function factorial(n: number) {
    var ans = 1;
    for (let i = n; i > 0; i--) {
      ans *= i;
    }
    return ans;
  }

  function n_choose_k(n : number, k : number) {
    return ((factorial(n))/(factorial(k)*(factorial(n-k))));
  }
  

  function calc_binomial(n : number, k : number, p : number) {
    var ans = ((n_choose_k(n, k) * Math.pow(p, k) * Math.pow(1-p, n-k)))
    return ans;
  }

  function submit() {
    const result = calc_binomial(n, k, p);
    setAns(result);
  }

  return (
    <div>
      <div className="mx-8 my-8">
        <p>K value:</p>
        <input type="number" className="bg-white text-black" value={k} onChange={(e) => {
          setK(Number(e.target.value))
        }}/>
        <p>N value:</p>
        <input type="number" className="bg-white text-black" value={n} onChange={(e) => {
          setN(Number(e.target.value))
        }}/>
        <p>P value:</p>
        <input type="number" step="0.01" className="bg-white text-black" value={p} onChange={(e) => {
          setP(Number(e.target.value))
        }}/>
        <button className="bg-gray-600 hover:bg-gray-400" onClick={submit}>Submit</button>
      </div>
      <div>
        {/* Issue here is that I can't round it simply -- might need to rewrite n_choose_k using a log approximation */}
        <span>Result:</span>
        <span>{ans}</span>
      </div>
    </div>
  );
}

// function n_choose_k(n: any, k: any) {
//   let n_fac = 
// }


