/// <reference path="../Scripts/jasmine/jasmine.js" />
/// <reference path="../Source/numberGenerationHub.js" />

describe("Create a number generation hub.",
    // Test createNumberGenerationHub with null messageDiv
    function () {
        it("Should return message that a message Div is required",

            function () {
                var message = createNumberGenerationHub(null);

                expect(message).toBe("You must specify a message Div.");
            });
    }
);

// Test createNumberGenerationHub with empty string messageDiv
// Test createNumberGenerationHub with wrong parameter type
// Test createNumberGenerationHub with valid messageDiv
// Test created hub has maxPrimeLimit, primesRequestedOutOfRange and generatedNumbers methods

// Test connectToNumberGenerationHub with null hub
// Test connectToNumberGenerationHub with wrong parameter type
// Test connectToNumberGenerationHub with valid hub

// Test generatePrimeMultiplicationTable with null amountOfPrimes
// Test generatePrimeMultiplicationTable with non int amountOfPrimes
// Test generatePrimeMultiplicationTable with int amountOfPrimes
// Test generatePrimeMultiplicationTable with null generationHub
// Test generatePrimeMultiplicationTable with wrong type for generationHub
// Test generatePrimeMultiplicationTable with valid generationHub & amountOfPrimes

// Test displayMessage with null messageDiv
// Test displayMessage with null messageText
// Test displayMessage with valid messageDiv
// Test displayMessage with valid messageText