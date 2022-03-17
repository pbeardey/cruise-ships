/* globals describe it expect */
const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe ('Ship', () => {

  describe ('with ports and itinerary', ()  => {
    let dover;
    let calais;
    let itinerary;
    let ship;

    beforeEach( () => {
       dover = new Port('Dover');
       calais = new Port('Calais');
       itinerary = new Itinerary([dover, calais]);
       ship = new Ship(itinerary);
    });

    it ('can be instantiated', () => { 
      expect(ship).toBeInstanceOf(Object);
    });
  
    it ('has a starting port', () => {
        expect(ship.currentPort).toBe(dover);
    });
  
    it ('can set sail', () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(ship.previousPort).toBe(dover);
      expect(dover.ships).not.toContain(ship);
    });

    it ('gets added to port on instantiation', () => {
      expect(dover.ships).toContain(ship);
    });
    it ('can dock at a different port', () => {
      ship.setSail();
      ship.dock();
  
      expect(ship.currentPort).toBe(calais);
      expect(calais.ships).toContain(ship);
    });
  
    it ('cant sail past last port in itineray', () => {
      ship.setSail();
      ship.dock();
      
      expect( () => ship.setSail() ).toThrow('End of itinerary reached');
    });
  });


});

