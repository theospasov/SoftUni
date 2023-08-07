import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'

import { TodoContext } from './contexts/TodoContext';
import Button from 'react-bootstrap/Button';
import { Header } from './components/Header';
import { ToDoList } from './components/TodoList';
import { AddTodoModal } from './components/AddTodoModal';

function App() {

  const [todos, setTodos] = useState([])
  const [showAddTodo, setShowAddTodo] = useState(false)

  const baseUrl = 'http://localhost:3030/jsonstore/todos'
  useEffect(() => {
    (async () =>  {
      const res = await fetch(baseUrl)
      const data = await res.json()
      setTodos(Object.values(data))
    })()
  }, [])

  const onTodoAddSubmit = async (values) => {
    const res = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    const result  = await res.json()


    setShowAddTodo(false)
    setTodos(prevState => [...prevState, result])
  }

  const onTodoAddClick = () => {
    setShowAddTodo(true)
  }

  const onTodoAddClose= () => {
    setShowAddTodo(false)
  }

  const onTodoDeleteClick = async (todoId) => {
    const res = await fetch(`${baseUrl}/${todoId}`, {
      method: 'DELETE'
    })

    setTodos(prevState => prevState.filter(todo => todo._id !== todoId))
  }

  const contextValue = {
      onTodoDeleteClick
  }

  return (
    <TodoContext.Provider value={contextValue}>

    <>
      <Header/>
      <ToDoList 
        todos={todos} 
        onTodoAddClick={onTodoAddClick}
        
        />
      {showAddTodo && <AddTodoModal show={showAddTodo} onTodoAddClose={onTodoAddClose} onTodoAddSubmit={onTodoAddSubmit}/>}
    </>
    </TodoContext.Provider>

);
}

export default App;
