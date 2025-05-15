import React, { useState } from 'react'

const List = ({chidren}) => {

const [post, setPost] = useState("this is first")



  return (
    <>
        <ul className="list-group" value={post}>
                 {chidren}
        </ul>
    </>
  )
}

export default List
