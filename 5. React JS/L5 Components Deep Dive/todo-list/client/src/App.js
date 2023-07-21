import React, { useState } from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Todos from "./components/Todos";

function App() {

  const [todos, setTodos] = React.useState([])
  const [isLoading, setIsLoading] = useState(true)

  React.useEffect(() => {
    fetch(`http://localhost:3030/jsonstore/todos`)
      .then(res => res.json())
      .then(data => {
        const result = Object.keys(data).map(id => ({id, ...data[id]}))
        setTodos(result)
        setIsLoading(false)
      })
  }, [])

  function statusChangeHandler(id) {
    setTodos(prevState => prevState.map(todo => todo.id === id ? ({...todo, isCompleted: !todo.isCompleted}) : todo))
  }

  function todoAdd() {
    const lastId = Number(todos.length - 1)
    const text = prompt("Add task name")
    setTodos(prevState => [{id: lastId + 1, text, selected: false}, ...prevState])
  }

  return (
    <div className="App">

      <Header/>

      <main className="main">

        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn" onClick={todoAdd}>+ Add new Todo</button>
          </div>

          <div className="table-wrapper">

          {
            isLoading 
            ? <Loading />
            : <Todos todos={todos} statusChangeHandler={statusChangeHandler}/>

          }
          



          </div>
        </section>
      </main>

      <Footer/>

      </div>
    );
}

export default App;
