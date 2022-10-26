const inputs = document.querySelectorAll('label input');
inputs.forEach((input) => {
  input.onfocus = () => {
    input.previousElementSibling.classList.add('top', 'focus');
    input.parentNode.classList.add('focus');
  };
  input.onblur = () => {
    //se sobreescribe el input para que si el usuario solo pone espacios no los tome
    input.value = input.value.trim();
    //se trimea el input para eliminar los espacios al inicio y al final del input y despues se lee si el input tiene contenido
    if (input.value.trim().length == 0) {
      input.previousElementSibling.classList.remove('top');
    }
    input.previousElementSibling.classList.remove('focus');
    input.parentNode.classList.remove('focus');
  };
});
