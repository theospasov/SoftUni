import { useState } from "react";

export const useForm = (initialValues) => {
    const [formValues, setFormValues] = useState(initialValues)

    const changeFormHandler = (e) => {
        setFormValues(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    return {
        formValues,
        changeFormHandler
    }
}