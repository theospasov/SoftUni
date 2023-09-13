import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';



import { AuthProvider } from './contexts/AuthContext'
import  { gameServiceFactory } from './services/gameService';


import { Header } from "./components/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Catalog } from "./components/Catalog/Catalog";
import { GameDetails } from './components/GameDetails/GameDetails';
import { Logout } from './components/Logout/Logout';
import { useService } from './hooks/useService';
import { EditGame } from './components/EditGame/EditGame';
import { withAuth } from './hoc/withAuth';

function App() {
    const navigate = useNavigate();
    const [games, setGames] = useState([]);
    const gameService = gameServiceFactory() //auth.accessToken


    // Get games
    useEffect(() => {
        gameService.getAll()
            .then(result => {
                //console.log(result);
                setGames(result)
            })
    }, []);

    // Create Games
    const onCreateGameSubmit = async (data) => {
        const newGame = await gameService.create(data);

        setGames(state => [...state, newGame]);

        navigate('/catalog');
    };


    const onGameEditSubmit = async (values) => {
        const result = await gameService.edit(values._id,values)

        
        navigate(`/catalog/${values._id}`)

        // change state
        setGames(prevState => prevState.map(x => x._id == values._id ? result : x))
    }

    // Example of using HOC - we take the Login, enhance it (currently the enhancer doesn't do anything) and we return a new component "EnhancedLogin"
    const EnhancedLogin = withAuth(Login)

    return (
        <AuthProvider > 

        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<EnhancedLogin />} />
                    <Route path='/logout' element={<Logout/>} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/create-game' element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} />} />
                    <Route path='/catalog' element={<Catalog games={games} />} />
                    <Route path='/catalog/:gameId' element={<GameDetails />} />
                    <Route path='/catalog/:gameId/edit' element={<EditGame onGameEditSubmit={onGameEditSubmit}/>} />
                </Routes>
            </main>

            <Footer />
        </div>
                    
        </AuthProvider>
    );
}

export default App;
