(function Itinerary () {

    class Itinerary {
        constructor (ports){  //when initiating, pass in an array of Port instances.
            this.ports = ports; 
        }
    }
    

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Itinerary;
    } else {
        window.Controller = Itinerary;
    };


}());

