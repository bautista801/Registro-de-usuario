import React from 'react'
import {auth, db} from '../firebase'
import { useNavigate } from "react-router-dom"

const Login = () => {

    const params = useNavigate()

    //email y clave de registro
    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')

    //errores del registro
    const [error, setError] = React.useState(null)

    //validacion del registro
    const [esRegistro, setEsRegistro] = React.useState(true)

    //requisitos del registro
    const procesarDatos = (e) => {
        e.preventDefault()

        if (!email.trim()) {
            setError('Por favor ingrese un Email...')
            return
        }

        if (!pass.trim()) {
            setError('Por favor ingrese una clave...')
            return
        }

        if (pass.length < 6) {
            setError('La clave debe tener 6 caracteres o más')
            return
        }

        //console.log('Registro exitoso!')
        setError(null)

        if (esRegistro) {
            registrar()
        }else {
            login()
        }
    }

    const login = React.useCallback(async () => {
        try {
            const res = await auth.signInWithEmailAndPassword(email, pass)
            //console.log(res.user)
            setEmail('')
            setPass('')
            setError(null)
            params('/admin')
        } catch (error) {
            //console.log(error)
            if (error.code === 'auth/user-not-found') {                
                setError('El email no está registrado')
            }
            if (error.code === 'auth/invalid-email') {                
                setError('El email es incorrecto')
            }
            if (error.code === 'auth/wrong-password') {                
                setError('Contraseña incorrecta')
            }
        }
    }, [email, pass, params])

    //sube el correo y la clave a firebase
    const registrar = React.useCallback(async() => {
        try {
            const res = await auth.createUserWithEmailAndPassword(email, pass)
            await db.collection('usuarios').doc(res.user.email).set({
                email: res.user.email,
                uid: res.user.uid
            })
            setEmail('')
            setPass('')
            setError(null)
            params('/admin')
            //console.log(res.user)
        } 

        //posibles errores del email al registrarse
        catch (error) {
            //console.log(error)
            if (error.code === 'auth/invalid-email') {                
                setError('Email no válido')
            }
            if (error.code === 'auth/email-already-in-use') {
                setError('Este mail ya está en uso')
            }
        }
    }, [email, pass, params])


    //contenido HTML
  return (
    <div className='mt-5'>
        {/* texto de registro/login */}
        <h3 className='text-center'>
            {
                esRegistro ? 'Registro de usuario' : 'Iniciar sesión'
            }
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
                        placeholder='Ingrese un Email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    {/* input password */}
                    <input 
                        type="password" 
                        className='form-control mb-2'
                        placeholder='Ingrese una clave'
                        onChange={(e) => setPass(e.target.value)}
                        value={pass}
                    />

                    {/* boton de registrarse */}
                    <button className="btn btn-dark btn-lg btn-block" type='submit'>
                        {
                            esRegistro ? 'Registrarse' : 'Iniciar sesión'
                        }
                    </button>

                    {/* boton de login */}
                    <button 
                        className="btn btn-info btn-sm btn-block"
                        onClick={() => setEsRegistro(!esRegistro)}
                        type='button'
                    >
                        {
                            esRegistro ? '¿ya tienes una cuenta?' : '¿no tienes cuenta?'
                        }
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login