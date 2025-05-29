import { useContext } from "react";
import "./App.css";
import Button from "./component/Button";
import { Context } from "./component/context/CountContext";

function App() {
  const { count } = useContext(Context);

  console.log(count);

  return (
    <>
      <body className="bg-dark">
        <h3 className="text-center mt-5 text-white">Counter</h3>
        <div className="w-50 mx-auto mb-5 shadow shadow-lg p-4 rounded text-center text-white border border-white">
          <h4>
            Count : <span>{count}</span>
          </h4>
          <div>
            <Button></Button>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
