import { valorCarta } from "./valor-carta";
/**
 * 
 * @param {<String>} carta 
 * @param {<Number>} turno 
 * @returns 
 */

export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}