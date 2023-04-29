import './App.css';
import Counter from './components/Counter';
import MovieList from './components/MovieList';
import Timer from './components/Timer';

function App() {
  const movies = [
    { title: 'Man of Steel', year: 2008, cast: ['Henry Cavil', 'Mariq'] },
    { title: 'Harry Potter', year: 2006, cast: ['Daniel', 'Emma'] },
    { title: 'Lord of the rings', year: 2001, cast: ['Orlando'] }
  ]

  return (
    <div className="App">
      <h1>React Demo</h1>
      <Counter resetAllowed/>
      <Timer start={0}/>
      <MovieList movies={movies}/>
    </div>
  );

}

export default App;
