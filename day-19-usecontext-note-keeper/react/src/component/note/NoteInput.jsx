import { useContext } from "react";
import { NoteContext } from "../../context/NoteContext";

const NoteInput = () => {
  const { handleChange, handleTask, task ,edit,handleUpdate} = useContext(NoteContext);

  return (
    <div>
      <div className="max-w-md mx-auto my-5">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 ">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            value={task}
            onChange={handleChange}
  
            className=" w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="add Task..."
            required
          />

          
          {
            !edit ?
            <button
            onClick={handleTask}
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
          :
          <button
            onClick={handleUpdate}
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
          Edit
          </button>

          }
          
        </div>
      </div>
    </div>
  );
};

export default NoteInput;



// import { useContext, useRef, useEffect } from "react";
// import { NoteContext } from "../../context/NoteContext";

// const NoteInput = () => {
//   const {
//     tasks,
//     handleChange,
//     handleTask,
//     addInput,
//     edit,
//     handleUpdate,
//   } = useContext(NoteContext);

//   const firstInputRef = useRef(null);

//   useEffect(() => {
//     if (firstInputRef.current) {
//       firstInputRef.current.focus();
//     }
//   }, [tasks.length]);

//   return (
//     <div>
//       <div className="max-w-md mx-auto my-5 space-y-2">
//         {/* Multiple input fields */}
//         {tasks.map((input, index) => (
//           <div key={input.id} className="relative">
//             <div className="absolute inset-y-0 start-0 flex items-center ps-3">
//               <svg
//                 className="w-4 h-4 text-gray-500 dark:text-gray-400"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                 />
//               </svg>
//             </div>
//             <input
//               ref={index === 0 ? firstInputRef : null}
//               value={input.task}
//               onChange={(e) => handleChange(input.id, e.target.value)}
//               className="w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
//               placeholder={`Task ${index + 1}`}
//               required
//             />
//           </div>
//         ))}

//         <div className="flex gap-2 mt-3">
//           <button
//             onClick={addInput}
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//           >
//             + Add More
//           </button>

//           {!edit ? (
//             <button
//               onClick={handleTask}
//               className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
//             >
//               Add All
//             </button>
//           ) : (
//             <button
//               onClick={handleUpdate}
//               className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
//             >
//               Update
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NoteInput;

