import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'

import Button from 'react-bootstrap/Button';
import { Header } from './components/Header';
import { ToDoList } from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([])

  const baseUrl = 'http://localhost:3030/jsonstore/todos'
  useEffect(() => {
    (async () =>  {
      const res = await fetch(baseUrl)
      const data = await res.json()
      setTodos(Object.values(data))
    })()
  }, [])

  return (
    <>
      <Header/>
      <ToDoList todos={todos}/>

    </>

);
}

export default App;
