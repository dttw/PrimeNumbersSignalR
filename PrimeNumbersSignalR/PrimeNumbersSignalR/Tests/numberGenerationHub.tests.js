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
    ,
    // Test createNumberGenerationHub with empty string messageDiv
    function () {
        it("Should return message that a message Div is required",

            function () {
                var message = createNumberGenerationHub("");

                expect(message).toBe("You must specify a message Div.");
            });
    }
    ,
    // Test createNumberGenerationHub with wrong parameter type
    function () {
        it("Should return message that a message Div must be a string",

            function () {
                var message = createNumberGenerationHub(1);

                expect(message).toBe("Message div must be a valid string.");
            });
    }
    ,
    // Test createNumberGenerationHub with valid messageDiv
    // has maxPrimeLimit, primesRequestedOutOfRange and generatedNumbers methods
    function () {
        it("Should return a hub with maxPrimeLimit, primesRequestedOutOfRange and generatedNumbers client methods.",

            function () {
                var generationHub = createNumberGenerationHub("messages");

                expect(generationHub.client.maxPrimeLimit).not(typeof 'undefined').not(null);
                expect(generationHub.client.primesRequestedOutOfRange).not(typeof 'undefined').not(null);
                expect(generationHub.client.generatedNumbers).not(typeof 'undefined').not(null);
                expect(generationHub.server.maxPrimeLimit).not(typeof 'undefined').not(null);
                expect(hub.server.generateAmountOfPrimes).not(typeof 'undefined').not(null);
            }
        );

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