
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
    // TODO: Start the hub connection and run any functions required after the connection starts
}

function generatePrimeMultiplicationTable(amountOfPrimes, generationHub) {
    // TODO: Send request to hub for amount of primes specified
}

function displayMessage(messageDiv, messageText) {
    // TODO: Write a message to a div. Probably want this somewhere more general eventually.
}
