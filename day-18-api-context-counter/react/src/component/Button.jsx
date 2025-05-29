import { useContext } from "react";
import { Context } from "./context/CountContext";

const Button = () => {
  const { handleInc } = useContext(Context);
  const { handleDesc } = useContext(Context);
  const { handleRes } = useContext(Context);

  return (
    <>
      <button onClick={handleInc} className="btn btn-outline-light  ">
        Increase
      </button>

      <button onClick={handleDesc} className="btn btn-outline-light ms-2 ">
        Decrease
      </button>

      <button onClick={handleRes} className="btn btn-outline-light ms-2 ">
        Results
      </button>
    </>
  );
};

export default Button;
