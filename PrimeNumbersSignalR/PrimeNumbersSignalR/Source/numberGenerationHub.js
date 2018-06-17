
// Creates a hub proxy with required client methods to use the number generation hub.
function createNumberGenerationHub(messageDiv) {

    if (typeof messageDiv === 'undefined' || messageDiv === null || messageDiv === '') {
        return 'You must specify a message Div.';
    }

    if (typeof messageDiv !== 'string') {
        return 'Message div must be a valid string.';
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
    };

    return generationHub;
}

// Connects the clientside hub to the server.
function connectToNumberGenerationHub(generationHub) {
    if (typeof generationHub === 'undefined' || generationHub === null || typeof generationHub === 'string') {
        return 'You must supply a valid hub to start the connection.';
    }

    $.connection.hub.start().done(function () {
        generationHub.server.maxPrimeLimit();
    });

    return generationHub;
}

// Calls the server side GenerateAmountOfPrimes method with the amount of primes requested.
function generatePrimeMultiplicationTable(amountOfPrimes, generationHub) {
    if (typeof generationHub === 'undefined' || generationHub === null) {
        return 'You must specify a valid Generation Hub.';
    }

    if (typeof amountOfPrimes === 'undefined' || amountOfPrimes === null) {
        return 'You must specify the amount of primes to generate.';
    }

    if (amountOfPrimes <= 0 || typeof amountOfPrimes === 'string') {
        return 'The number of primes to generate must be a number > 0.';
    }

    generationHub.server.generateAmountOfPrimes(amountOfPrimes);
}

// Displays a message in a specified div on the page.
function displayMessage(messageDiv, messageText) {
    var htmlEncodedMessage = $('<div />').text(messageText).html();
    $('#' + messageDiv).html(htmlEncodedMessage);
}
