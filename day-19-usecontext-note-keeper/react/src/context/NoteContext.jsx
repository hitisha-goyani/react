import React, { Children, createContext, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export const NoteContext = createContext();

const NoteContextProvider = ({ children }) => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState("");

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
      },
    ]);
    toast("task added successfully...........");

    setTask("");
  }



  function handleDel(id) {
    const del = list.filter((ele) => ele.id !== id);
    setList(del);
    toast.info("Task Deleted......");
  }

  function handleEdit(ele) {
    console.log(ele);
    setTask(ele.task);
    setEdit(ele.id);
  }
  function handleUpdate() {
    let newList = list.map((ele) => {
      if (ele.id == edit) {
        ele.task = task;
      }

      return ele;
    });

    // let newList = list.map((ele) => ele.id == upId ? {...ele, task: task}  : ele )

    setList(newList);
    setTask("");
    setEdit("");
  }
  console.log(list);

  function handleStatus(id) {
    setList(
      list.map((ele) => (ele.id == id ? { ...ele, status: !ele.status } : ele))
    );
  }

 

  return (
    <div>
      <NoteContext.Provider
        value={{
          handleChange,
          handleTask,
          handleEdit,
          handleDel,
          handleUpdate,
          handleStatus,
          task,
          list,
          edit,
        }}
      >
        {children}
      </NoteContext.Provider>
    </div>
  );
};

export default NoteContextProvider;






