var checkForShip = require('./ship_methods').checkForShip;
var fireShip = require('./ship_methods').fireShip;

function validateLocation(player, coordinates) {
    var x = coordinates[0];
    var y = coordinates[1];

    var spaceAvailable = !checkForShip(player, coordinates);

    if ( (x <= 9 && x >= 0 ) && (y <= 9 && y >= 0) ) {
        return spaceAvailable; // decides whether this valid space is occupied
    } else {
        return false;
    }
}

function validateLocations(player, locations) {
    var validated = locations.map(location => {
        return validateLocation(player, location);
    });
    return validated.indexOf(false) === -1;
}

function placeShip(player, ship, startingCoordinates, direction) {
    if (!direction) throw Error('You left out the direction! I need that for math!!');

    var proposedLocations = [];
    var previousLocation,
        rowNumber,
        columnNumber;

    for (var i=0; i<ship.size; i++) {
        previousLocation = proposedLocations[i-1] || [];
        rowNumber = previousLocation[0];
        columnNumber = previousLocation[1];

        proposedLocations[i] = (i === 0) ? 
            startingCoordinates :
            (direction === 'horizontal') ? [rowNumber, ++columnNumber] : [++rowNumber, columnNumber];
    }
}

function getRandomCoordinates() {
    var x = Math.floor(Math.random() * 9);
    var y = Math.floor(Math.random() * 9);
    return [x, y];
}

function getRandomDirection() {
    return Math.random() > 0.5 ? 'horizontal' : 'vertical';
}

// fireShip(player, getRandomCoordinates());
// placeShip(computerPlayer, computerPlayer.ship[0], getRandomCoordinates(), getRandomDirection());


module.exports = {
    validateLocation: validateLocation,
    validateLocations: validateLocations,
    placeShip: placeShip
}
