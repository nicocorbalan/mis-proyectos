const input_color = document.getElementById ('inputColor');
const boton = document.getElementById ('boton');
const text_hexadecimal = document.getElementById('textoHexa')
const card_color = document.querySelector('#cardColor')

boton.addEventListener('click', 
() => {
    text_hexadecimal.textContent = input_color.value;
    card_color.style.backgroundColor = input_color.value;
});