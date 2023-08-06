import { ListGroup, Button} from 'react-bootstrap';
import { TodoItem } from './TodoItem';
import { AddTodoModal } from './AddTodoModal';

export function ToDoList({
    todos
}) {

    return (
        <div style={{ width: '30%', margin: '10px auto' }}>
            <h1>ToDo App</h1>
            <ListGroup style={{marginBottom: '10px'}}>
                {todos.map(todo =><TodoItem key={todo._id} {...todo}/>)}
                
            </ListGroup>
            <Button variant="primary">Add</Button>
            <AddTodoModal/>
        </div>

    )
}