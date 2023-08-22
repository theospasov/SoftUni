import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as gameService from './services/gameService';
import { AuthContext } from './contexts/AuthContext'
import * as authService from './services/authService'

import { Header } from "./components/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Catalog } from "./components/Catalog/Catalog";
import { GameDetails } from './components/GameDetails/GameDetails';
import { Logout } from './components/Logout/Logout';

function App() {
    const navigate = useNavigate();
    const [games, setGames] = useState([]);
    const [auth, setAuth] = useState({})

    // Get games
    useEffect(() => {
        gameService.getAll()
            .then(result => {
                //console.log(result);
                setGames(result)
            })
    }, []);

    const onCreateGameSubmit = async (data) => {
        const newGame = await gameService.create(data);

        setGames(state => [...state, newGame]);

        navigate('/catalog');
    };

    // Authentication
        const onLoginSubmit = async (data) => {
            try {
                const result = await authService.login(data)

                // we add the authentication data to the state 
                setAuth(result)
                //console.log(result);

                navigate('/catalog')
            } catch (error) {
                console.log(`There is a problem ` + error);
            }
        }

        const onRegisterSubmit = async (data) => {
            const {confirmPassword, ...registerData} = data
            if (confirmPassword !== registerData.password) {
                return
            }

            try {
                const result = await authService.register(registerData)

                // we add the authentication data to the state 
                setAuth(result)

                navigate('/catalog')
            } catch (error) {
                console.log(`There is a problem ` + error);
            }
        }

        const onLogout = async () => {
            //TODO: authorized request
            //await authService.logout()
            setAuth({})
        }

        const contextValues = {
            onLoginSubmit,
            onRegisterSubmit,
            onLogout,
            userId: auth._id,
            token: auth.accessToken,
            userEmail: auth.email,
            isAuthenticated: !!auth.accessToken
        }

    // /Authentication

    return (
        <AuthContext.Provider value={contextValues}> 

        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login onLoginSubmit={onLoginSubmit} />} />
                    <Route path='/logout' element={<Logout/>} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/create-game' element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} />} />
                    <Route path='/catalog' element={<Catalog games={games} />} />
                    <Route path='/catalog/:gameId' element={<GameDetails />} />
                </Routes>
            </main>

            <Footer />
        </div>
                    
        </AuthContext.Provider>
    );
}

export default App;
