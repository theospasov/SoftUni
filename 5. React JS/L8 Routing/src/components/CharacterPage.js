import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const CharacterPage = () => {

    const { characterId } = useParams()
    const [ characterInfo, setCharacterInfo] = useState({})

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${characterId}`)
            .then(res => res.json())
            .then(data => {
                setCharacterInfo(data)
            })
    }, [characterId])

    const navigate = useNavigate()// we create a function that is equal to use navigate and call that function when we want to redirect

    function onBackButtonClick() {
        navigate('/characters') // go to a specific path
       // navigate() // return to the previous page
    }

    return (
        <>
            <h1>Character Info</h1>
            <h2>{characterInfo.name}</h2>
            <h2>{characterInfo.birth_year}</h2>
            <button onClick={onBackButtonClick}>Back</button>
        </>

    )

}