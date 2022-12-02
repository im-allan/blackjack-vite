
/**
 * {Array <Number>} Puntosjugadores
 */

export const determinarGanador = (puntosJugadores) => {

    const [puntosMinimos, puntosMaquina] = puntosJugadores;
    setTimeout(() => {
        if (puntosMinimos === puntosMaquina) {
            alert('Empate')
        } else if (puntosMinimos > 21) {
            alert('El ganador es la máquina')
        } else if (puntosMaquina > 21) {
            alert('El ganador es el jugador')
        } else {
            alert('El ganador es la máquina')
        }
    }, 100);
}