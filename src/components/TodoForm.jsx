import React, {useState, useRef, useEffect} from 'react'

const TodoForm = (props) => {

  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })

  const handelSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput("");

  };

  const handelChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <form className="todo-form" onSubmit={handelSubmit}>
      <input type="text" placeholder='Task' value={input} name='text' className='todo-input' onChange={handelChange} ref={inputRef}/>

      <button className='todo-button'>Add Task</button>
    </form>
  )
}

export default TodoForm