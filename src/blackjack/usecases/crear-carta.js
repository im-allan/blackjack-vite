/**
 * Esta función genera cartas por parte de la máquina
 * @param {<String>} carta 
 * @param {<Number>} turno 
 */

export const crearCarta = (carta, turno, divCartasJugadores) => {

    const imgCarta = document.createElement('img');
    imgCarta.src = `/assets/img/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);

}