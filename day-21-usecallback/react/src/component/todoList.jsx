import React from 'react'

const TodoList = ({todo}) => {

    console.log("checking for memorizor!!!!!!!!")
  return (
    <div>
         <ul className="max-w-md space-y-1 text-black list-disc list-inside dark:text-black">
            {
                todo.map((ele,index)=>(
                    <li>{ele} - {index+1}</li>

                ))
            }
         </ul>
      
    </div>
  )
}

export default React.memo(TodoList)
