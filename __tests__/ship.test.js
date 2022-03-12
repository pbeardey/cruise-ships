/* globals describe it expect */
const Ship = require('../src/ship')

describe ('Ship', () => {
  it ('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it ('has a starting port', () => {
      const ship = new Ship();
      expect(ship.startingPort).toBe('Dover');
  })

  it ('can set sail', () => {
      const ship = new Ship();
      ship.setSail();
      expect(ship.startingPort).toBeFalsy();
  })
});