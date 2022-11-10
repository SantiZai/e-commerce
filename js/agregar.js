const url = document.querySelector('.url');
const categoria = document.querySelector('.categoria');
const nombreProd = document.querySelector('.nombre-prod');
const precioProd = document.querySelector('.precio-prod');
const descripcionProd = document.querySelector('.descripcion-prod');
const btnAgregar =  document.querySelector('.btn-agregar');
const fila2 = document.getElementById('fila2')

function crearProd() {
    const prod = document.createElement('div');
    prod.classList.add('container-icons')
    const img1 = document.createElement('img');
    img1.src = "assets/imgs/trash.png";
    const img2 = document.createElement('img');
    img2.src = "assets/imgs/pencil.png";
    const imgP = document.createElement('img');
    imgP.src = url.value;
    imgP.classList.add('producto-productos')
    prod.appendChild(img1);
    prod.appendChild(img2);
    prod.appendChild(imgP);
    return prod;
}

localStorage.setItem('newProduct', crearProd())
console.log(localStorage.getItem('newProduct'))
btnAgregar.addEventListener('click', () => {
    const prod = localStorage.getItem('newProduct');
    fila2.appendChild(prod)
})
