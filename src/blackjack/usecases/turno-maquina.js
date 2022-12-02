import { pedirCarta } from "./pedir-carta";
import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import { determinarGanador } from "./determinar-ganador";
/**
 * 
 * @param {<Number>} puntosMinimos que la máquina necesita para ganar
 * @param {Array <String>} Deck contiene las cartas
 */

export const turnoMaquina = (puntosMinimos, deck = [], puntosJugadores, puntosHTML, divCartasJugadores) => {
    if (!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    let puntosMaquina = 0;
    do {
        const carta = pedirCarta(deck);
        puntosMaquina = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML);
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);
    } while ((puntosMaquina < puntosMinimos) && (puntosMinimos <= 21));
    determinarGanador(puntosJugadores);
}