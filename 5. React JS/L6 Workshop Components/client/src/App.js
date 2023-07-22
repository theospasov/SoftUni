import './App.css'
import React from 'react'

import * as userService from './services/userService'

import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import UserList from "./components/UserList";

function App() {

  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    userService.getAll()
      .then(users => {
          setUsers(users)
      })
      .catch(err => {
        console.log('Error' + err);
      })

  }, [users])

  return (
    <>
      <Header/>
  
      <main className="main">
        <section className="card users-container">

          <Search/>

          <UserList users={users} />
        </section>
      </main>

      <Footer/>
        
    </>
  );
}

export default App;
