import React, {useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if(!todo.text || /^\s*$/.test(todo.text)){
      return
    }

    const newTodos = [...todos, todo];

    setTodos(newTodos);

    console.log(newTodos)

  }

  const completeTodo = (id) => {
    let updatedTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isComplete = !todo.isComplete;
      }
      return todo
    })
    setTodos(updatedTodos);
  }

  const handelDlete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handelEdit = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)){
      return
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))

  }

  return (
    <div>
      <h1>Plans for today</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo todos={todos} completeTodo={completeTodo} handelDlete={handelDlete} handelEdit={handelEdit}/>
    </div>
  )
}

export default TodoList