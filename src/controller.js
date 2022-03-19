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


    if (typeof module !== 'undefined' && module.exports) {
        //module.exports = Port;
    } else {
        window.Controller = Controller;
    };

} ());

