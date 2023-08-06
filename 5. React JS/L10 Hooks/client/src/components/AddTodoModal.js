import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { useState } from 'react';

export function AddTodoModal() {

    const [formValues, setFormValues] = useState({
        text: ''
    })

    const onTodoAddSubmit = (e) => {
        e.preventDefault()

        console.log(formValues);
    }

    const onChangeHandler = (e) => {
        setFormValues(prevState => ({...prevState, [e.target.name]: e.target.value}) )
    }

    return (

        <Modal show={true}>
            <Modal.Header closeButton>
                <Modal.Title>Add Todo</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={onTodoAddSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Todo</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="text" 
                            placeholder="Buy milk"
                            value={formValues.name}
                            onChange={onChangeHandler} />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{marginRight: '10px'}}>Submit</Button>
                    <Button variant="secondary">Close</Button>

                </Form>
            </Modal.Body>

        </Modal>


    )
}