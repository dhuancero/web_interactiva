const espana = document.getElementById('esp');
const colombia = document.getElementById('col');
const mexico = document.getElementById('mex');

const nombre = document.getElementById('nompa');
const texto = document.getElementById('infpa');

const arreglo = document.querySelectorAll('li');
const imag = document.querySelector('img');


function activo() {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i].onclick = function(){
            arreglo[i].classList.add('activo');
            nombre.textContent = arreglo[i].textContent;
            quitarColor();
        }
    }
}
function quitarColor() {
    if (nombre.textContent === 'España') {
        mexico.classList.remove('activo');
        colombia.classList.remove('activo');
        imag.setAttribute('src', 'img/esp.png');
        texto.text.textContent = '';
    }
    else if(nombre.textContent === 'México'){
        espana.classList.remove('activo');
        colombia.classList.remove('activo');
        imag.setAttribute('src', 'img/col.png');
        texto.text.textContent = '';
    }
    else if(nombre.textContent === 'Colombia'){
        espana.classList.remove('activo');
        mexico.classList.remove('activo');
        imag.setAttribute('src', 'img/mex.png');
        texto.textContent = '';
    }

}

activo();
