import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
    const [formValues, setFormValues] = useState(initialValues)

    const changeFormHandler = (e) => {
        setFormValues(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    // explained L11 - 1:26:35
    const onSubmit = (e) => {
        e.preventDefault()

        onSubmitHandler(formValues)
    }

    return {
        formValues,
        changeFormHandler,
        onSubmit
    }
}