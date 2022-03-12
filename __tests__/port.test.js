/* globals describe it expect */
const Ship = require('../src/ship');
const Port = require('../src/port');


describe ('Port' ,() => {  
    it ('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it ('check port has a name property', () => {
     const port = new Port('Dover');
     expect(port.name).toBe('Dover');
  });

});