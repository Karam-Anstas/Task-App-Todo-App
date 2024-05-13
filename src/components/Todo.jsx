import React, {useState} from 'react';
import TodoForm from './TodoForm';
import { FaTrashAlt, FaPenSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Todo = ({todos, completeTodo, handelDlete, handelEdit}) => {

  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });

  const submitUpdate = (value) => {
    handelEdit(edit.id, value);
    setEdit({
      id: null,
      value: ""
    })
  }

  if(edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <motion.div animate={{scale: 1, opacity: 1}} initial={{scale: 0, opacity:0}}  exit={{
      opacity: 0,
      scale: 0,
      transition: { duration: 0.3 },
    }} transition={{type: "tween", duration: 0.5}}
     className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)} >
        {todo.text}
      </div>
      <div className="icons">
        <FaPenSquare className='btn-fa' role='button' onClick={() =>setEdit({
          id: todo.id,
          value: todo.text
          })}/>
        <FaTrashAlt className='btn-fa' role='button' onClick={() => handelDlete(todo.id)}/>
      </div>
    </motion.div>
  ))
}

export default Todo