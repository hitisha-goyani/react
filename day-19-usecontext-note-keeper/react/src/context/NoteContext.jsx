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




// import React, { createContext, useState } from "react";
// import { toast } from "react-toastify";
// import { v4 as uuidv4 } from "uuid";

// export const NoteContext = createContext();

// const NoteContextProvider = ({ children }) => {
//   const [tasks, setTasks] = useState([{ id: uuidv4(), task: "" }]);
//   const [list, setList] = useState([]);
//   const [edit, setEdit] = useState("");

//   // Handle input value changes
//   function handleChange(id, value) {
//     setTasks((prev) =>
//       prev.map((item) => (item.id === id ? { ...item, task: value } : item))
//     );
//   }

//   // Add a new input field
//   function addInput() {
//     setTasks([...tasks, { id: uuidv4(), task: "" }]);
//   }

//   // Add all non-empty tasks to the main list
//   function handleTask() {
//     const newTasks = tasks.filter((t) => t.task.trim() !== "");

//     if (newTasks.length === 0) {
//       toast.warning("Please enter at least one task");
//       return;
//     }

//     setList([
//       ...list,
//       ...newTasks.map((t) => ({
//         id: uuidv4(),
//         task: t.task,
//         status: false,
//       })),
//     ]);

//     toast.success("Tasks added successfully");
//     setTasks([{ id: uuidv4(), task: "" }]); // reset input
//   }

//   // Delete task from list
//   function handleDel(id) {
//     setList(list.filter((ele) => ele.id !== id));
//     toast.info("Task Deleted");
//   }

//   // Load task to edit
//   function handleEdit(ele) {
//     setTasks([{ id: ele.id, task: ele.task }]);
//     setEdit(ele.id);
//   }

//   // Save updated task
//   function handleUpdate() {
//     const updatedTask = tasks[0]?.task || "";

//     const newList = list.map((ele) =>
//       ele.id === edit ? { ...ele, task: updatedTask } : ele
//     );

//     setList(newList);
//     setTasks([{ id: uuidv4(), task: "" }]);
//     setEdit("");
//     toast.success("Task updated");
//   }

//   // Toggle task completion
//   function handleStatus(id) {
//     setList(
//       list.map((ele) =>
//         ele.id === id ? { ...ele, status: !ele.status } : ele
//       )
//     );
//   }

//   return (
//     <NoteContext.Provider
//       value={{
//         tasks,
//         list,
//         edit,
//         handleChange,
//         handleTask,
//         addInput,
//         handleEdit,
//         handleDel,
//         handleUpdate,
//         handleStatus,
//       }}
//     >
//       {children}
//     </NoteContext.Provider>
//   );
// };

// export default NoteContextProvider;

