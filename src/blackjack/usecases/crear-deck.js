import _ from 'underscore';

/**
 * Esta función crea un deck
 * @param {Array<string>} TiposDeCartastipos. Ejemplo ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales. Ejemplo ['A', 'J', 'Q', 'K']
 * @returns {Array} retorna un nuevo deck de cartas
 * 
 */

export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
    if (!tiposDeCartas || tiposDeCartas.length === 0) throw new Error('TiposDeCarta es obligatorio como un arreglo de String');

    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('TiposEspeciales es obligatorio como un arreglo de String');
    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCartas) {
            deck.push(`${i}${tipo}`)
        }
    }
    for (let tipo of tiposDeCartas) {
        for (let especial of tiposEspeciales) {
            deck.push(`${especial}${tipo}`)
        }
    }
    return _.shuffle(deck);
}