import React from 'react'
import styles from './Movie.module.css'

export default function Movie({id,title, year, plot, posterUrl, director, movieDeleteHandler, highlightHandler, selected}) {

    React.useEffect(() => {
        console.log(`Movie ${title} - mounted`)
    }, [])

    React.useEffect(() => {
        console.log(`Movie ${title} - has been updated`)
    }, [selected])

    React.useEffect(() => {
        return () => {
            console.log(`Movie ${title} - has been unmounted`)
        }
    }, [])

    return (
        <article className={styles['movie-article']}>
            {selected && <h2>Selected</h2>}
            <h3>{title}, {year}</h3>
            <main>
                <img src={posterUrl} alt={title} />
                <p>{plot}</p>
            </main>
            <footer>
               <p>Director: {director}</p> 
               <button onClick={()=>movieDeleteHandler(id)}>Delete movie</button>
               <button onClick={()=> highlightHandler(id)}>Select</button>
            </footer>
        </article>
    )
}