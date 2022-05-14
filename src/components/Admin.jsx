import React from 'react'
import {auth} from '../firebase'
import { useNavigate } from "react-router-dom"
import Firestore from './Firestore'

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
        <h2 className='text-center bg-dark text-white mt-2 p-2'>Tus tareas creadas</h2>
        {
            user && (
                <Firestore user={user} />
            )
        }
    </div>
  )
}

export default Admin