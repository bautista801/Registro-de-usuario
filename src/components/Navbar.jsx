import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {auth} from '../firebase'
import { useNavigate } from "react-router-dom"

const Navbar = (props) => {

    const params = useNavigate()

    const cerrarSesion = () => {
        auth.signOut()
            .then(() => {
                params('/Login')
            })
    }

  return (
    <div className='navbar navbar-dark bg-dark'>
        <Link className='navbar-brand mx-3' to='/'>REGISTRO</Link>
        <div>
            <div className="d-flex mx-2">
                <NavLink className='btn btn-dark mr-2' to='/'>Inicio</NavLink>
                {
                    props.fireBaseUser !== null ? (
                        <NavLink className='btn btn-dark mx-2' to='/Admin'>Admin</NavLink>
                    ) : null
                }
                {
                    props.fireBaseUser !== null ? (
                        <button 
                            className="btn btn-dark"
                            onClick={() => cerrarSesion()}
                        >
                            Logout
                        </button>
                    ) : ( 

                        <NavLink className='btn btn-dark mr-2' to='/Login'>login</NavLink>
                    )
                }
            </div>            
        </div>
    </div>
  )
}

export default Navbar