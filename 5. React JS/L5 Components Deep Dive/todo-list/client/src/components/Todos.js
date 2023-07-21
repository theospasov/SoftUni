export default function Todos({todos, statusChangeHandler}) {



    return (
        <table className="table">
        <thead>
          <tr>
            <th className="table-header-task">Task</th>
            <th className="table-header-status">Status</th>
            <th className="table-header-action">Action</th>
          </tr>
        </thead>
        <tbody>

          {
            todos.map(todo => (
                
                    <tr className={todo.isCompleted ? "todo is-completed" : "todo"} key={todo.id} >
                    <td>{todo.text}</td>
                    <td>{todo.isCompleted ? "Completed" : "Not Completed" }</td>
                    <td className="todo-action">
                    <button className="btn todo-btn" onClick={()=> statusChangeHandler(todo._id)}>Change status</button>
                    </td>
                    </tr>
                

                

            ))
          }


        </tbody>
      </table>
    )
}