/* useForm is a custom hook we create to handle Forms. 
We have form in Login, Register, Edit and Create. Instead of repeating code multiple time, we create an abstraction - a Hook, that controls the form values, puts them in state (formValues), listens for changes (changeForHandler) and has a on submit handler.

*/

import { useState, useEffect } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
    const [formValues, setFormValues] = useState(initialValues)

    useEffect(() => {

    },[formValues] )

    const changeFormHandler = (e) => {
        setFormValues(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    // explained L11 - 1:26:35
    const onSubmit = (e) => {
        e.preventDefault()
        setFormValues(initialValues)
        onSubmitHandler(formValues)
    }

    const changeValues = (newValues) => {
        // TODO: validate newValues shape (like initialValues)

        setFormValues(newValues)
    }

    return {
        formValues,
        changeFormHandler,
        onSubmit,
        changeValues
    }
}