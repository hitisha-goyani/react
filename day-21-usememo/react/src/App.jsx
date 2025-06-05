import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false);

  // const final = () => {
  //   return cal();
  // };

  const finalcal = useMemo(() => {
    return cal();
  }, [count]);

  function cal() {
    for (let i = 0; i < 1000000000; i++) {}
    return count;
  }
  return (
    <>
      <div className="mx-auto max-w-xl mt-10 ">
        <button
          type="button"
          onClick={() => setCount(count + 1)}
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 me-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Count - {finalcal}
        </button>
        <button
          type="button"
          onClick={() => setStatus(!status)}
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          {status ? "true" : "false "}
        </button>
      </div>
    </>
  );
}

export default App;
