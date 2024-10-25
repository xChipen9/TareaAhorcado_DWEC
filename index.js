const palabraSecreta = "JUEGO".toUpperCase();
const intentosMaximos = 6; 
let intentosRestantes = intentosMaximos;
let letrasAdivinadas = []; 

const verPalabra = document.getElementById("visualizarPalabra");
const contenedorLetras = document.getElementById("letras");
const verIntentos = document.getElementById("intentos");
const verMensaje = document.getElementById("mensaje");

verIntentos.textContent = intentosRestantes;

function mostrarPalabra() {
    verPalabra.textContent = palabraSecreta
        .split('')
        .map(letra => letrasAdivinadas.includes(letra) ? letra : "_")
        .join(' ');
}

function crearLetras() {
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    alfabeto.forEach(letra => {
        const boton = document.createElement('button');
        boton.textContent = letra;
        boton.classList.add('letra');
        boton.addEventListener('click', () => manejarIntentos(letra, boton));
        contenedorLetras.appendChild(boton);
    });
}

function manejarIntentos(letra, boton) {
    boton.disabled = true; 
    boton.classList.add('disabled');
    
    if (palabraSecreta.includes(letra)) {
        letrasAdivinadas.push(letra);
        mostrarPalabra();
o
        if (!verPalabra.textContent.includes('_')) {
            verMensaje.textContent = "¡Felicidades, Has ganado!";
            contenedorLetras.innerHTML = ''; 
        }
    } else {
        intentosRestantes--;
        verIntentos.textContent = intentosRestantes;

        if (intentosRestantes === 0) {
            verMensaje.textContent = `Has perdido. La palabra era "${palabraSecreta}".`;
            contenedorLetras.innerHTML = '';
        }
    }
}

function jugar() {
    mostrarPalabra();
    crearLetras();
}

verIntentos.textContent = intentosRestantes;
jugar();
