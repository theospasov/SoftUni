import ListGroup from 'react-bootstrap/ListGroup';

export function TodoItem({
    text,
    isCompleted
}) {
    return(
        <ListGroup.Item action>
                    {text}
                </ListGroup.Item>
    )
} 