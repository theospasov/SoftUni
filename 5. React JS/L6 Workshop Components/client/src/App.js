import { useEffect, useState } from 'react';

import * as userService from './services/userService';

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Search } from "./components/Search";
import './App.css';
import { UserList } from "./components/UserList";
import { UserCreate } from './components/UserCreate';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(setUsers)
            .catch(err => {
                console.log('Error' + err);
            });
    }, []);

    const onUserCreateSubmit = async (e) => {
        // stop automatic from submit
        e.preventDefault()
        
        // Take form data from DOM tree
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)

        // Send ajax request to server
        const createdUser = await userService.create(data)
        
        // If successful add new user to the State
        setUsers( prevState => [...prevState, createdUser])

        // Close form page
    }

    return (
        <>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <Search />

                    <UserList users={users} onUserCreateSubmit={onUserCreateSubmit} />

                    
                </section>
            </main>
           
            <Footer />
        </>
    );
}

export default App;
