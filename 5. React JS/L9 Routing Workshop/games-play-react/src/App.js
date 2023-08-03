import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import * as gameService from './services/gameService'

import { Catalog } from "./components/Catalog/Catalog";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { GameDetails } from './components/GameDetails/GameDetails';


function App() {

  const [ games, setGames ] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    gameService.getAll()
      .then( result => {
        setGames(result)
  
    })
  }, [])

  const onCreateGameSubmit = async (data) => {
    const newGame = await gameService.create(data)
    console.log(newGame);
    setGames(prevState => [...prevState, newGame])
    navigate('/catalog')
  }

  return (
    <div id="box">

    <Header/>

    <main id="main-content">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>} />
          <Route path='/create-game' element={<CreateGame onCreateGameSubmit={onCreateGameSubmit}/>}/>
          <Route path='/catalog' element={<Catalog games={games}/>}/>
          <Route path='catalog/:gameId' element={<GameDetails/>} />
      </Routes>
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <CreateGame/> */}
      {/* <Catalog/> */}
    </main>
    
    <Footer/>

    </div >
  );
}

export default App;
