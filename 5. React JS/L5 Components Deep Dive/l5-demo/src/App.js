import MovieList from './components/MovieList';
import {movies} from './movies'

function App() {
  return (
    <div >
      <h1>Movie Collection</h1>
      <MovieList movies={movies.slice(0,10)}/>
    </div>
  );
}

export default App;
