import React, { useCallback } from 'react'
import {auth} from '../firebase'
import { useNavigate} from "react-router-dom"

const Reset = (props) => {

    const params = useNavigate()

    const [email, setEmail] = React.useState('')
    const [error, setError] = React.useState(null)

    const procesarDatos = (e) => {
        e.preventDefault()

        if (!email.trim()) {
            setError('Por favor ingrese un Email...')
            return
        }

        //console.log('Registro exitoso!')
        setError(null)

        recuperar()
    }

    const recuperar = React.useCallback(async() => {
        try {
            await auth.sendPasswordResetEmail(email)
            console.log('correo enviado')
            params('/login')
        } catch (error) {
            setError(error.message)
        }
    }, [email])

  return (
    <div className='mt-5'>
        {/* texto de registro/login */}
        <h3 className='text-center'>
            Recuperar contraseña
        </h3>
        <hr />

        {/* contenedor de inputs y botones */}
        <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-xl-4">

                {/* formulario */}
                <form onSubmit={procesarDatos}>
                    {
                        error && (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        )
                    }

                    {/* input email */}
                    <input 
                        type="email" 
                        className='form-control mb-2'
                        placeholder='Ingrese su Email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    {/* boton de registrarse */}
                    <button className="btn btn-dark btn-lg btn-block" type='submit'>
                        Recuperar contraseña
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Reset