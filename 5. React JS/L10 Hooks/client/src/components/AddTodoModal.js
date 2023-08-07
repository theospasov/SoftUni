import { useState } from 'react';

import { useForm } from '../hooks/useForm';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

export function AddTodoModal({
    onTodoAddSubmit,
    show,
    onTodoAddClose
}) {

    const { formValues, onChangeHandler, onSubmit} = useForm({
        text: ''
    },  onTodoAddSubmit)


    return (

        <Modal show={show}>
            <Modal.Header closeButton>
                <Modal.Title>Add Todo</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={onSubmit}>
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
                    <Button variant="secondary" onClick={onTodoAddClose}>Close</Button>

                </Form>
            </Modal.Body>

        </Modal>


    )
}