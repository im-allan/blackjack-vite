/**
 * 
 * @param {carta <String>}  Carta del deck tomada por el jugador
 * @returns {<Number>}  Retorna el valor de la carta
 */

export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (!isNaN(valor)) ? valor * 1
        : (valor === 'A') ? 11 : 10;
}