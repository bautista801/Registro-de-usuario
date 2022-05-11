import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Admin from "./components/Admin";
import Inicio from "./components/Inicio";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import {auth} from './firebase'

function App() {

  const [fireBaseUser, setFireBaseUser] = React.useState(false)

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      //console.log(user)
      if (user) {
        setFireBaseUser(user)
      }else {
        setFireBaseUser(null)
      }
    })
  }, [])

  return fireBaseUser !== false ? (
    <BrowserRouter>
    
      <div className="container">
        <Navbar fireBaseUser={fireBaseUser} />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Login' element={<Login />}/>
          <Route path='/Admin' element={<Admin />}/>
        </Routes>
      </div>

    </BrowserRouter>
  ) : ( <p className="text-center mt-5">Cargando...</p> )
}

export default App;
