// Agregar evento de submit al formulario
loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar que el formulario se envíe

    // Obtener valor del campo de correo y contraseña
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    // Intentar iniciar sesión con Firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            // Inicio de sesión exitoso
            const user = userCredential.user;
            console.log('Inicio de sesión exitoso:', user);

            // Redirigir a otra página
            window.location.replace('index2.html');
        })
        .catch(function(error) {
            // Manejar errores de inicio de sesión
            console.error('Error en inicio de sesión:', error);

            if (error.code === 'auth/user-not-found') {
                // El correo no está registrado en Firebase
                console.error('El correo no está registrado');
                // Mostrar mensaje de error al usuario
                errorMessage.innerText = 'El correo no está registrado';
            } else {
                // Otro tipo de error
                console.error('Error en inicio de sesión:', error.message);
                // Mostrar mensaje de error al usuario
                errorMessage.innerText = 'Ocurrió un error al iniciar sesión';
            }
        });
});

