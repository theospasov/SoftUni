import { useEffect, useState } from "react"
import { Character } from "./CharacterList"


export const Characters = () => {

    const [ characters, setCharacters ] = useState([])

    useEffect(() => {        
            fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results)
            })    
    }, [])

    return (
        <>
            <h1>Star Wars Characters</h1>
                <ul>
                  {characters.map(c => <Character key={c.url} {...c}/>)}  
                </ul>
        </>

    )
}