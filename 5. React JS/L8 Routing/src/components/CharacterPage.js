import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


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

    return (
        <>
            <h1>Character Info</h1>
            <h2>{characterInfo.name}</h2>
            <h2>{characterInfo.birth_year}</h2>
        </>

    )

}