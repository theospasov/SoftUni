// this hook aims to keep a State inside it, that is persistent in the localStorage and will notify us every time there is a change in that State
// We want to make our State the single source of truth and localStorage should follow it. The only time when localStorage will be SST is when we perform a refresh. Because state will be deleted, upon refresh we will get the localStorage, add it to State and from there State will become SST
import { useEffect, useState } from "react";


export function useLocalStorage(key, initialValue) {
    const [state, setState] = useState(initialValue)

    // take info from localStorage and set it to State for the initial load of the page
    useEffect(() => {
        const persistedStateSerialized = localStorage.getItem(key) // Serialized means it is in String format
        if (persistedStateSerialized) {
            const persistedState = JSON.parse(persistedStateSerialized)
            setState(persistedState)
        }

    }, [])

    // setter function that updates State and localStorage
    const setLocalStorageState = (value) => {
        setState(value)

        // the second argument must be a String, that's why we use JSON.stringify()
        localStorage.setItem(key, JSON.stringify(value))
    }

    // we return an array, because we want the useLocalStorage to be used the same way as State is used - state is an Array, so we return an Array. The first thing in that array is the State and the second is a setter function
    return [
        state,
        setLocalStorageState
    ]

}