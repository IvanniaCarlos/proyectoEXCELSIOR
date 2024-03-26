// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID",
    measurementId: "TU_MEASUREMENT_ID"
};
firebase.initializeApp(firebaseConfig);

// Obtener referencia al formulario de inicio de sesión y al elemento de mensaje de error
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

// Agregar evento de submit al formulario
loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar que el formulario se envíe

    // Obtener valor del campo de correo
    const email = loginForm['email'].value;

    // Verificar si el correo existe en Firebase
    firebase.auth().fetchSignInMethodsForEmail(email)
        .then(function(signInMethods) {
            // Si signInMethods no está vacío, el correo existe en Firebase
            if (signInMethods.length > 0) {
                // Continuar con el inicio de sesión
                const password = loginForm['password'].value;
                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then(function(userCredential) {
                        // Inicio de sesión exitoso
                        const user = userCredential.user;
                        console.log('Inicio de sesión exitoso:', user);
                        // Redirigir a otra página
                        redirectIndex2();
                    })
                    .catch(function(error) {
                        // Manejar errores de inicio de sesión
                        console.error('Error en inicio de sesión:', error.message);
                    });
            } else {
                // El correo no existe en Firebase
                console.error('El correo no está registrado');
                // Mostrar mensaje de error al usuario
                errorMessage.innerText = 'El correo no está registrado';
            }
        })
        .catch(function(error) {
            // Manejar errores de verificación de correo
            console.error('Error al verificar el correo:', error.message);
        });
});

function redirectIndex2() {
    window.location.href = 'index2.html';
}

  
