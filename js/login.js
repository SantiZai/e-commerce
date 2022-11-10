const entrar = document.getElementById('login')
const correo = document.getElementById('correo-entrar')
const contraseña = document.getElementById('contraseña-entrar')

const admin = {
    correo: 'admin@123.com',
    contraseña: '12345'
}
entrar.addEventListener('click', e => {
    if (correo.value == admin.correo && contraseña.value == admin.contraseña) {
        entrar.href = './productos.html'
    } else {
        alert('Usuario o contraseña incorrecta')
    }
})