( function Controller () {
    
    function Controller () {
        this.initialiseSea();
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
            newPortElement.dataset.portIndex = port.index;
            portsElement.appendChild(newPortElement);
            const portsElementWidth = parseInt(portsElement.style.width, 10);
            portsElement.style.width = `${portsElementWidth + 256}px`;
        } );
    }

    if (typeof module !== 'undefined' && module.exports) {
    } else {
        window.Controller = Controller;
    };

} ());

