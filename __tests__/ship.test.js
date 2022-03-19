/* globals describe it expect */
const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ship', () => {

  describe('with ports and itinerary', () => {
    let dover;
    let calais;
    let itinerary;
    let ship;

    beforeEach(() => {
      //dover = new Port('Dover');
      //calais = new Port('Calais');
      dover = {   //stub object of a port
        name: 'Dover',
        addShip: jest.fn(),
        removeShip: jest.fn(),
        ships: [] 
      }
      calais = { //stub object of a port
        name: 'Calais',
        addShip: jest.fn(),
        removeShip: jest.fn(),
        ships: [] 
      }
      itinerary = new Itinerary([dover, calais]);
      ship = new Ship(itinerary);
    });

    it('can be instantiated', () => {
      expect(ship).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
      expect(ship.currentPort).toBe(dover);
    });

    it('can set sail', () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(ship.previousPort).toBe(dover);
      //expect(dover.ships).not.toContain(ship);  //replaced with a spy on a stub to reduce dependency
      expect(dover.removeShip).toHaveBeenCalledWith(ship); //check stub method is run with correct argument rather than it does what we know it does.

    });

    it('gets added to port on instantiation', () => {
      //expect(dover.ships).toContain(ship); //replaced with a spy on a stub to reduce dependency
      expect(dover.addShip).toHaveBeenCalledWith(ship); //check stub method is run with correct argument rather than it does what we know it does.
    });
    it('can dock at a different port', () => {
      ship.setSail();
      ship.dock();

      expect(ship.currentPort).toBe(calais);
      //expect(calais.addShip)toBe(ship); //replaced with a spy on a stub to reduce dependency
      expect(calais.addShip).toHaveBeenCalledWith(ship); //checks stub method is run with correct arguemnt ranther than it actuallys adds ship to array.
    });

    it('cant sail past last port in itineray', () => {
      ship.setSail();
      ship.dock();

      expect(() => ship.setSail()).toThrow('End of itinerary reached');
    });
  });


});

