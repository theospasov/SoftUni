import { useEffect, useState } from "react"
import { Character } from "./Character"


export const Characters = () => {

    const [ characters, setCharacters ] = useState([])

    useEffect(() => {
        async function getCharacters() {
            fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results)
            })
        }
        getCharacters()
    }, [])


    return (
        <>

            <h1>Star Wars Characters</h1>
                <ul>
                  {characters.map(c => <Character {...c}/>)}  
                </ul>
        
        </>

    )
}