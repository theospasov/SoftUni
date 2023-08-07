import { useEffect, useState } from "react";

export function useForm(initialFormValues, onSubmitHandler) {

    const [ formValues, setFormValues] = useState(initialFormValues)

    const onChangeHandler = (e) => {
        setFormValues(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        onSubmitHandler(formValues)
    }

    return {
        formValues,
        onChangeHandler,
        onSubmit
    }

}