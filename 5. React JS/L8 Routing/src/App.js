import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
import { About } from './components/About';
import { Navigation } from './components/Navigation.js';
import { Characters } from './components/AllCharactersPage.js'
import { CharacterPage } from './components/CharacterPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='*' element={<h1>404</h1>}/> {/* 404 Page */}
            <Route path='/characters' element={<Characters/>}/>
            <Route path='/characters/:characterId' element={<CharacterPage/>}/>
            
        </Routes>
      </header>
    </div>
  );
}

export default App;
