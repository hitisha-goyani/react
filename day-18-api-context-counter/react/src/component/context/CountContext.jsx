import { createContext } from "react";
import { useState } from "react";

export const Context = createContext();

const CountContext = ({ children }) => {
  const [count, setCount] = useState(0);

  function handleInc() {
    setCount(count + 1);
  }

  function handleDesc() {
    setCount(count - 1);
  }

  function handleRes() {
    setCount(0);
  }

  return (
    <Context.Provider value={{ count, handleInc, handleDesc, handleRes }}>
      {children}
    </Context.Provider>
  );
};

export default CountContext;
