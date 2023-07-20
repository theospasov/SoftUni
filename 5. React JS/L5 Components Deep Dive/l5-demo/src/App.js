import MovieList from './components/MovieList';
import React from 'react'
import {movies as movieData} from './movies'

function App() {

  const [movies, setMovies] = React.useState(()=> movieData)


  const movieDeleteHandler = (id) => {
    setMovies(prevState => prevState.filter(movie => movie.id !== id)
    )
  }

  // Go through all of the movies. If there is a match for the id, replace the Object with the same Object (spread) with a new key - selected that is true, make all of the other movies's selected to be false so we may have only one selected movie
  const highlightHandler= (id) => {
    setMovies(prevState => prevState.map(x => x.id === id ? {...x, selected: true} : {...x, selected: false}))
  }

  return (
    <div >
      <h1>Movie Collection</h1>
      <MovieList movies={movies.slice(0,10)} movieDeleteHandler={movieDeleteHandler} highlightHandler={highlightHandler}/>
    </div>
  );
}

export default App;
