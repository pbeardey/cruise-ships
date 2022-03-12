class Ship {
    constructor (port) {
        this.currentPort = port;
    }

    setSail() {
        this.currentPort = null;
    }
}

module.exports = Ship;