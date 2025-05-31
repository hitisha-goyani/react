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

  function handleDel(id){
    const del = list.filter((ele) =>ele.id !== id)
    setList(del)
    toast.info("Task Deleted......")
  }

  function handleUpdate(id){
     let newtodo = list.map((ele)=>ele.id == id ? {...ele , status :!ele.status} : ele)
        setList(newtodo)
        toast.success("Task updated successfully!");

  }
  
  
  return (
    <div>
      <NoteContext.Provider value={{ handleChange, handleTask,handleUpdate,handleDel, task, list }}>
        {children}
      </NoteContext.Provider>
    </div>                                                      
  );
};

export default NoteContextProvider;
