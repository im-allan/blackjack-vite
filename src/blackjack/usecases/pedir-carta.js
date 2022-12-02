
/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Contiene las cartas
 * @returns {String} Retorna el último elemento del Deck
 */

export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}
