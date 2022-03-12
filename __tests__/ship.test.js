/* globals describe it expect */
const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe ('Ship', () => {
  it ('can be instantiated', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);

    expect(new Ship(itinerary)).toBeInstanceOf(Object);
  });

  it ('has a starting port', () => {
      const port = new Port('Dover');
      const itinerary = new Itinerary([port]);
      const ship = new Ship(itinerary);

      expect(ship.currentPort).toBe(port);
  })

  it ('can set sail', () => {
      const dover = new Port('Dover');
      const calais = new Port('Calais');
      const itinerary = new Itinerary([dover, calais]);
      const ship = new Ship(itinerary);

      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(ship.previousPort).toBe(dover);
  })

  it ('can dock at a different port', () => {
    const dover = new Port('Dover');
    const calais = new Port('calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
      
    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(calais);

  });

  it ('cant sail past last port in itineray', () => {
    const dover = new Port('Dover');
    const calais = new Port('calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();
    
    expect( () => ship.setSail() ).toThrow('End of itinerary reached');

  });
});

