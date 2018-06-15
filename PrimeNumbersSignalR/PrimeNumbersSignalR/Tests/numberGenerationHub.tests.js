﻿/// <reference path="../Scripts/jasmine/jasmine.js" />
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
    }
);

describe("Connect to number generation Hub.",
    // Test connectToNumberGenerationHub with null hub
    function () {
        it("Should return message that a hub is required",

            function () {
                var message = connectToNumberGenerationHub(null);

                expect(message).toBe("You must supply a valid hub to start the connection.");
            });
    }
    ,
    // Test connectToNumberGenerationHub with wrong parameter type
    function () {
        it("Should return a message unable to connect due to invalid Hub",

            function () {
                var message = connectToNumberGenerationHub("");

                expect(message).toBe("You must supply a valid hub to start the connection.");
            });
    }
    ,
    // Test connectToNumberGenerationHub with valid hub
    function () {
        it("Should change the connection state of the supplied hub to connected ",

            function () {
                var numberGenerationHub = createNumberGenerationHub("messages");

                connectToNumberGenerationHub(numberGenerationHub);

                expect(numberGenerationHub.state).toBe(1);
            });
    }
);

describe("Create a multiplication Table with the numbers supplied.",
    // Test generatePrimeMultiplicationTable with null amountOfPrimes
    function () {
        it("Should return message that the number of primes to generate is required.",

            function () {
                var message = generatePrimeMultiplicationTable(null);

                expect(message).toBe("You must specify the amount of primes to generate.");
            });
    }
    ,
    // Test generatePrimeMultiplicationTable with non int amountOfPrimes
    function () {
        it("Should return a message that the number of primes to generate must be a number.",

            function () {
                var message = generatePrimeMultiplicationTable("NotValidNumber");

                expect(message).toBe("The number of primes to generate must be a number > 0.");
            });
    }
    ,
    // Test generatePrimeMultiplicationTable with negative int amountOfPrimes
    function () {
        it("Should return a message that the number of primes to generate must be > 0.",

            function () {
                var message = generatePrimeMultiplicationTable(-1);

                expect(message).toBe("The number of primes to generate must be a number > 0.");
            });
    }
    ,
    // Test generatePrimeMultiplicationTable with 0 amountOfPrimes
    function () {
        it("Should return a message that the number of primes to generate must be > 0.",

            function () {
                var message = generatePrimeMultiplicationTable(0);

                expect(message).toBe("The number of primes to generate must be a number > 0.");
            });
    }
    ,
    // Test generatePrimeMultiplicationTable with null generationHub
    function () {
        it("Should return a message that a valid Hub must be supplied.",

            function () {
                var message = generatePrimeMultiplicationTable("");

                expect(message).toBe("You must specify a valid Generation Hub.");
            });
    }
);










// Test displayMessage with null messageDiv
// Test displayMessage with null messageText
// Test displayMessage with valid messageDiv
// Test displayMessage with valid messageText