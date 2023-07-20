import Movie from "./Movie";


export default function MovieList({movies, movieDeleteHandler, highlightHandler}) { // 1

    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id} >  {/*2 */}
                    <Movie {...movie} movieDeleteHandler={movieDeleteHandler} highlightHandler={highlightHandler} /> {/* 3  */}
                </li>
            ))}
        </ul>
    )
}

/* 
1. Here we're using Object destructuring.

2. Each React Element from a List Component should have an unique key 

3. We're using the spread operator to make Props with the keys of the Object. Without it, it will have to look like:
<Movie
    title={movie.title}
    year={movie.year}
    plot={movie.plot}
    posterUrl={movie.posterUrl} 
/>  
*/