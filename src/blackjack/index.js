import _ from 'underscore';
import { crearDeck, pedirCarta, turnoMaquina, acumularPuntos, crearCarta } from './usecases';
(() => {
    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    // Referencias de HTML
    const btnPedir = document.querySelector('#btn-pedir'),
        btnDetener = document.querySelector('#btn-detener'),
        btnNuevo = document.querySelector('#btn-nuevo');

    const divCartasJugadores = document.querySelectorAll('.div-cartas'),
        puntosHTML = document.querySelectorAll('small');

    // Esta función inicializa el juego
    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck(tipos, especiales);
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }
        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(img => img.innerHTML = '');
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }


    // Eventos

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta(deck);
        const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);
        crearCarta(carta, 0, divCartasJugadores);

        if (puntosJugador > 21) {
            console.warn('Has perdido');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoMaquina(puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores);
        } else if (puntosJugador === 21) {
            console.warn('Has ganado');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoMaquina(puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores);
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoMaquina(puntosJugadores[0], deck, puntosJugadores, puntosHTML, divCartasJugadores);
    });

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();

    })

})();

