/* globals describe it expect */
const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');


describe ('Itinerary', () => {

    it ('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });


    it ('can have ports', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');

        const itinerary = new Itinerary([dover, calais]);

        expect(itinerary.ports).toEqual([dover,calais]);

    })
});