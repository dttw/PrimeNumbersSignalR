function createNumberGenerationHub(messageDiv) {

    if (typeof messageDiv === 'undefined' || messageDiv === null || messageDiv === '') {
        return "You must specify a message Div.";
    }

    if (typeof messageDiv !== 'string') {
        return "Message div must be a valid string.";
    }

    var generationHub = $.connection.numberGenerationHub;

    generationHub.client.maxPrimeLimit = function (maxPrimes) {
        displayMessage(messageDiv, 'You may generate a maximum of ' + maxPrimes + ' primes.');
    };

    generationHub.client.primesRequestedOutOfRange = function (outOfRangeMessage) {
        displayMessage(messageDiv, outOfRangeMessage);
    };

    generationHub.client.generatedNumbers = function (numbers) {
        var multiplicationTable = new MultiplicationTable();
        createMultiplicationTable(numbers, '#multiplicationTable', 'table table-striped');
    }

    return generationHub;
}

function connectToNumberGenerationHub(generationHub) {
    if (typeof generationHub === 'undefined' || generationHub === null) {
        return "You must supply a valid hub to start the connection.";
    }

    $.connection.hub.start().done(function () {
        generationHub.server.maxPrimeLimit();
    });
}

function generatePrimeMultiplicationTable(amountOfPrimes, generationHub) {
    if (typeof generationHub === 'undefined' || generationHub === null) {
        return "You must specify a valid Generation Hub.";
    }

    if (typeof amountOfPrimes === 'undefined' || amountOfPrimes === null) {
        return "You must specify the amount of primes to generate.";
    }

    if (amountOfPrimes <= 0) {
        return "The number of primes to generate must be a number > 0.";
    }

    generationHub.server.generateAmountOfPrimes(amountOfPrimes);
}

function displayMessage(messageDiv, messageText) {
    // TODO: Write a message to a div. Probably want this somewhere more general eventually.
}
