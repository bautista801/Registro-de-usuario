Este proyecto fue hecho con JavaScript, utilizando la librería React.JS, tambien se implementó Bootstrap para los estilos de los elementos HTML. El proyecto se basa en un registro de usuario real, al igual que un inicio de sesión, los datos del email y la contraseña se almacenan en una base de datos de Firebase, en donde quedan guardados para el inicio de sesíon.
Al registrarse o iniciar sesión, se desbloquea en la página la seccion "Admin" el cual se redirige automaticamente luego de este paso, a esta sección no se puede acceder a menos que se cree una cuenta, o esté iniciada la sesión
Tambien se habilita la opción del Logout, para cuando el usuario quiere salir de una cuenta y crearse o entrar a otra pueda hacerlo.
El proyecto tambien cuenta con un proceso de recuperacion de la contraseña, en caso de que el usuario haya olvidado la clave de la cuenta, en el apartado de iniciar sesión se encuentra el botón para recuperar la clave, en donde solamente habrá que colocar el correo de la cuenta que se desea recuperar, y luego se enviará un correo al Email, con un link para ingresar una clave nueva.
Este proyecto además convina el proyecto del "Anotador de tareas", pero con algunos cambios que mejoran la experiencia de usuario, cada usuario que se registre tendrá su propio anotador de tareas que se almacenará en la base de datos, tambien se le incluyó una paginacion, de manera que al recargar la pagina, o iniciar sesión mas tarde, la lista de tareas se irá desplegando con un botón que dice "Ver más"

El proyecto fue publicado en Vercel:
https://registro-de-usuario.vercel.app/


Al igual que se utilizó el hosting de Firebase:
https://proyecto-firebase-1-b0b7f.firebaseapp.com/

Ambas versiones donde están publicados el proyecto, generan el usuario y la contraseña y la alamacenan en la base de datos, quedando guardada para cuando se quiera volver a iniciar sesión
