import { useContext } from 'react';

import { TodoContext } from '../contexts/TodoContext';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export function TodoItem({
    _id,
    text,
    isCompleted,

}) {
    const {onTodoDeleteClick} = useContext(TodoContext)
    return(
        <ListGroup.Item action style={{display: 'flex', justifyContent: 'space-between'}}> 
                    {text} 
                    <Button variant="dark" onClick={() => onTodoDeleteClick(_id)}>X</Button>
                </ListGroup.Item>
    )
} 