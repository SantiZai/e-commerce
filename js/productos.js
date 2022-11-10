const trashs = document.querySelectorAll('.trash')
const pencils = document.querySelectorAll('.pencil')
const prods = document.querySelectorAll('.container-icons')

trashs.forEach(elem => {
    elem.addEventListener('click', () => {
        elem.parentNode.remove(elem)
    })
})