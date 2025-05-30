import React, { Children, createContext, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export const NoteContext = createContext();

const NoteContextProvider = ({ children }) => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
 

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleTask() {
    setList([
      ...list,
      {
        id: uuidv4(),
        task,
        status: false,
      }
    ])                                                              
    toast("task added successfully...........")
  }
  
  console.log(list)
  return (
    <div>
      <NoteContext.Provider value={{ handleChange, handleTask, task, list }}>
        {children}
      </NoteContext.Provider>
    </div>                                                      
  );
};

export default NoteContextProvider;
