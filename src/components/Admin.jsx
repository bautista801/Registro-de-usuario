import React from 'react'
import {auth} from '../firebase'
import { useNavigate } from "react-router-dom"

const Admin = () => {

    const params = useNavigate()

    const [user, setUser] = React.useState(null)

    React.useEffect(() => {
        if (auth.currentUser) {
            //console.log('existente')
            setUser(auth.currentUser)
        }else {
            //console.log('no esxiste')
            params('/Login')
        }
    })

  return (
    <div className='container'>
        <h2 className='text-center bg-dark text-white mt-2 p-2'>Proyecto de resgistro de usuarios, e inicio de sesión con cuentas creadas</h2>
        {
            user && (
                <p className='text-center'>Iniciaste sesión con {user.email}</p>
            )
        }
    </div>
  )
}

export default Admin