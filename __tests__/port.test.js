/* globals describe it expect */
const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');


describe('Port', () => {
  describe('with ports, ship1, ship2', () => {
    let port;
    let ship;
    let ship2;
    beforeEach(() => {
       port = new Port('Dover');
       ship = jest.fn(); //dummy ship
       ship2 = jest.fn();  //dummy ship
    })

    it('can be instantiated', () => {
      expect(port).toBeInstanceOf(Object);
    });

    it('check port has a name property', () => {
      expect(port.name).toBe('Dover');
    });


    it('can add a ship', () => {
      port.addShip(ship);

      expect(port.ships).toContain(ship);
    });

    it('can remove a ship', () => {
      port.addShip(ship);
      port.addShip(ship2);
      port.removeShip(ship2);

      expect(port.ships).toEqual([ship]);
    });
  });
});