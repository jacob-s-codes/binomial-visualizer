import Image from "next/image";

export default function Home() {

  function factorial(n: any) {
    var ans = 1;
    for (let i = n; i > 0; i--) {
      ans *= i;
    }
    return ans;
  }

  function n_choose_k(n : number, k : number) {
    return Math.round((factorial(n))/(factorial(k)*(factorial(n-k))));
  }

  let k = 0;
  let n = 0;
  let p = 0;

  function calc_binomial(n : number, k : number, p : number) {
    return (n_choose_k(n, k) * Math.pow(p, k) * Math.pow(1-p, n-k))
  }

  return (
    <div>
      <div className="mx-8 my-8">
        <p>K value:</p>
        <input type="text" className="bg-white " />
        <button className="bg-gray-400" >Submit</button>
      </div>
      <div>{k}</div>
    </div>
  );
}

// function n_choose_k(n: any, k: any) {
//   let n_fac = 
// }


