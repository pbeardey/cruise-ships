( function Controller () {
    
    function Controller (ship) {
        this.initialiseSea();
        this.ship = ship;
        const sailButton = document.getElementById('sailbutton');
        sailButton.addEventListener('click',  () => {
            this.setSail();
        })
    }
    Controller.prototype.initialiseSea = function initialiseSea() {
        const backgrounds = ['./images/water0.png','./images/water1.png'];
        let backgroundIndex = 0;
        window.setInterval(() => {
            const backgroundImg = backgroundIndex % backgrounds.length;
             document.querySelector('#viewport').style.backgroundImage = `url(${backgrounds[backgroundImg]})`;
             backgroundIndex += 1;
        }, 1000);
    }

    Controller.prototype.renderPorts = function(ports) {
        const portsElement = document.querySelector('#ports');
        portsElement.style.width = '0px';
        ports.forEach( (port, index) => {
            const newPortElement = document.createElement('div');
            newPortElement.className = 'port';
            newPortElement.dataset.portName = port.name;
            newPortElement.dataset.portIndex = index;
            portsElement.appendChild(newPortElement);
            const portsElementWidth = parseInt(portsElement.style.width, 10);
            portsElement.style.width = `${portsElementWidth + 256}px`;
        } );
    }

    Controller.prototype.renderShip = function() {
        const ship = this.ship;
        const shipPortIndex = this.ship.itinerary.ports.indexOf(ship.currentPort);
        const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
        const shipElement = document.querySelector('#ship');
        shipElement.style.top = `${portElement.offsetTop + 32}px`;
        shipElement.style.left = `${portElement.offsetLeft - 32}px`;
    }

    Controller.prototype.setSail = function() {
        const ship = this.ship;

        const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const nextPortIndex = currentPortIndex + 1;
        const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);

        if(!nextPortElement) {
            this.renderMessage(`Ship has terminated at ${ship.currentPort.name}`)
            return;
        }
        this.renderMessage(`Now departing ${ship.currentPort.name}`);

        const shipElement = document.querySelector('#ship');
        const sailInterval = setInterval(() => {
            const shipLeft = parseInt(shipElement.style.left, 10);
            if(shipLeft === (nextPortElement.offsetLeft - 32)) {
                ship.setSail();
                ship.dock();
                clearInterval(sailInterval);
            }
            shipElement.style.left = `${shipLeft + 1}px`;

        }, 20);
    }

    Controller.prototype.renderMessage = function(message) {
        const messageNode = document.createElement("div");
        const viewportNode = document.getElementById('viewport');
        messageNode.id = 'message';
        messageNode.innerHTML = message;
        viewportNode.appendChild(messageNode);
        const messageInterval = setTimeout(() => {
            viewportNode.removeChild(messageNode);
        },2000);
    }

    if (typeof module !== 'undefined' && module.exports) {
    } else {
        window.Controller = Controller;
    };

} ());

