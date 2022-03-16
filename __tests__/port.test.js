/* globals describe it expect */
const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');


describe ('Port' ,() => {  
    it ('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it ('check port has a name property', () => {
     const port = new Port('Dover');
     expect(port.name).toBe('Dover');
  });

  
  it ('can add a ship', () => {
     const port = new Port('Dover');
     const ship = {}
     port.addShip(ship);

     expect(port.ships).toContain(ship);
  });

  it ('can remove a ship', () => {
    const port = new Port('Dover');
    const ship1 = {};
    const ship2 = {};

    port.addShip(ship1);
    port.addShip(ship2);
    port.removeShip(ship2);

    expect(port.ships).toEqual([ship1]);
  });

  it ('gets added to port on instantiation', () => {
    const dover = new Port('Dover');
    const itinerary = new Itinerary([dover]);
    const ship = new Ship(itinerary);

    expect(dover.ships).toContain(ship);
  })
});