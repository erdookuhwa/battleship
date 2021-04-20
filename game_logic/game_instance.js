var fireShip = require('./ship_methods').fireShip;

function checkGameStatus(players) {
    return false;
}

function takeTurn(opposingPlayer, guessFunction) {
    var coordinates = guessFunction();
    fireShip(opposingPlayer, coordinates);
    var gameOver = checkGameStatus();

    return gameOver;
}

module.exports.checkGameStatus = checkGameStatus;
module.exports.takeTurn = takeTurn;

