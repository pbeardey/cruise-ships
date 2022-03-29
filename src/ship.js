(function Ship () {

    class Ship {
        constructor (itinerary) {
            this.itinerary = itinerary;
            this.currentPort = this.itinerary.ports[0];
            this.previousPort = null;
            this.currentPort.addShip(this);
        }
    
        setSail() {
            const itinerary = this.itinerary;
            const currentPortIndex = this.itinerary.ports.indexOf(this.currentPort);
    
            if (currentPortIndex === (itinerary.ports.length - 1)) {
                throw new Error ('End of itinerary reached')
             }
    
            this.previousPort = this.currentPort;
            this.currentPort = null;
            this.previousPort.removeShip(this);
         
            
        }
    
        dock(port) {
            const itinerary = this.itinerary;
            const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
            this.currentPort = itinerary.ports[previousPortIndex + 1];
            this.currentPort.addShip(this);
            controller.renderMessage(`Ship has arrived at ${this.currentPort.name}`)
            
            //render Head Up display with current port and next port
            if (previousPortIndex + 2 < itinerary.ports.length) {
                const nextPort = itinerary.ports[previousPortIndex + 2]
                controller.renderHeadsUp(this.currentPort, nextPort);
            } else {
                controller.renderHeadsUp(this.currentPort);
            }
        }
    }
    
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Ship;
    } else {
        window.Ship = Ship;
    };

}());
