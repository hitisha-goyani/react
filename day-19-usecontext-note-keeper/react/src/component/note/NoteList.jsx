import {
  AcademicCapIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";
import { NoteContext } from "../../context/NoteContext";

const NoteList = () => {
  const { list, handleDel, handleEdit, handleStatus } = useContext(NoteContext);
  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        {list.map((ele) => (
          <div key={ele.id} className="rounded-md border border-slate-700 p-2">
            <h4 className="font-bold">{ele.task}</h4>
            <p
              onClick={() => handleStatus(ele.id)}
              className={ele.status ? "text-green-600" : "text-red-600"}
            >
              {ele.status ? <span>Completed</span> : <span>Not Completed</span>}
            </p>
            <button
              onClick={() => handleDel(ele.id)}
              className=" rounded-full p-1 bg-gray-100 hover:bg-gray-200"
            >
              <TrashIcon className="size-5 text-red-400" />
            </button>
            <button
              onClick={() => handleEdit(ele)}
              className=" rounded-full p-1 bg-gray-100 hover:bg-gray-200 ms-2"
            >
              <PencilSquareIcon className="size-5 text-amber-400" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default NoteList;
