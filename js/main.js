/*En la parte inferior debe aparecer la cantidad de dinero que tiene la jugadora. Agrega el código
necesario para que la usuaria seleccione una cantidad a apostar, y en dependencia si gana o pierde
esta cantidad se actualice.

El juego finaliza cuando la usuaria llegue a 200 euros, agrega el código necesario para que se
muestre un botón Reiniciar Juego que vuelva a iniciar el juego cuando se cumpla esta condición y
desaparezca el botón de Jugar.

Cuando le demos click a al botón Reiniciar Juego desaparece este botón, poner todos los
contadores a cero y vuelve a aparecer el botón Jugar.
Cuando finalice el juego, muestra quién ha ganado la partida: la computadora o la usuaria.

Saca tu lado creativo y maqueta y decora tu página con estilo*/

'use strict';

const selectNumber = document.querySelector('.js-selectNumber');
const win = document.querySelector('.js-win');
const lose = document.querySelector('.js-lose');
const btn = document.querySelector('.js-btn');
//generar num ale

function getRandomNumber(max) { 
  return Math.ceil(Math.random() * max); 
}


const saldoSeleccionado = document.querySelector('.js-saldo');
const saldo = saldoSeleccionado.value;
const saldo50 = document.querySelector('.class50');
const saldo100 = document.querySelector('.class100');
const saldoWin = document.queryCommandValue('.classWin');
//acertar números

function getMatch() {
    event.preventDefault();
    const numAle= getRandomNumber(6);
    const number = parseInt(selectNumber.value);
    console.log(numAle);
    if (number === numAle) {
        lose.classList.add('collapsed');
        win.classList.remove('collapsed');
        
        

    } else {
        win.classList.add('collapsed');
        lose.classList.remove('collapsed');
      
    }
};


btn.addEventListener('click', getMatch);


/* si gana cambia a 100 si pierde a 50 */

/*function saldo() {
    if (saldo === 50 && number === numAle) {
        saldo50.classList.add('collapsed');
        saldo100.classList.remove('collapsed');
    } else if (saldo === 100 && number === numAle {
        saldo100.classList.add('collapsed');
        saldoWin.classList.remove('collapsed);
    } else {

    }
}


btn.addEventListener('click', saldo);*/
