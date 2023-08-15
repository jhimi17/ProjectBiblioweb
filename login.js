const form = document.querySelector('form'); // Selecciona el formulario
const errorMessege = document.getElementById('error-messege');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Previene la recarga de la página por defecto

    const data = {
        username: form.username.value,
        password: form.password.value
    };

    try {
        const response = await fetch(`https://gnius-biblioteca.rj.r.appspot.com/genius/api/usuario/login/${data.username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const userData = await response.json();

            if (userData.passwordUsuario === data.password) {
                // Autenticación exitosa, redirigir a otra página
                window.location.href = 'Bienvenido.html';
            } else {
                errorMessege.style.display = 'block';
            }
        } else {
            errorMessege.style.display = 'block';
        }
    } catch (error) {
        console.error('Error al comunicarse con la API:', error);
    }
});
