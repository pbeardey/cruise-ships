/* globals describe it expect */
const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');


describe ('Itinerary', () => {

    it ('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });


    it ('can have ports', () => {
        const dover = jest.fn() //dummy port
        const calais = jest.fn()  //dummy port

        const itinerary = new Itinerary([dover, calais]);

        expect(itinerary.ports).toEqual([dover,calais]);

    })
});