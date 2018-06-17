/// <reference path='../Scripts/jasmine/jasmine.js'/>
/// <reference path='../Source/numberGenerationHub.js' />
/// <reference path='../Scripts/jquery-3.3.1.min.js' />
/// <reference path='../Scripts/jquery.signalR-2.2.3.min.js' />
/// <reference path='../SignalR/signalrHubs.js' />

describe('Tests for createNumberGenerationHub.', function () {
    // Test createNumberGenerationHub with null messageDiv
    describe('Try to create a hub with no message div defined.',
        function () {
            it('Should return message that a message Div is required',
                function () {
                    var message = createNumberGenerationHub(null);

                    expect(message).toBe('You must specify a message Div.');
                });
        }
    )
        ,
        describe('Try to create a hub with empty message div defined.',
            // Test createNumberGenerationHub with empty string messageDiv
            function () {
                it('Should return message that a message Div is required',
                    function () {
                        var message = createNumberGenerationHub('');

                        expect(message).toBe('You must specify a message Div.');
                    });
            }
        )
        ,
        describe('Try to create a hub with message div not a string.',
            // Test createNumberGenerationHub with wrong parameter type
            function () {
                it('Should return message that a message Div must be a string',
                    function () {
                        var message = createNumberGenerationHub(1);

                        expect(message).toBe('Message div must be a valid string.');
                    });
            }
        )
        ,
        describe('Try to create a hub with a valid message div.',
            // Test createNumberGenerationHub with valid messageDiv
            // has maxPrimeLimit, primesRequestedOutOfRange and generatedNumbers methods
            function () {
                it('Should return a hub with maxPrimeLimit, primesRequestedOutOfRange and generatedNumbers client methods.',
                    function () {
                        var generationHub = createNumberGenerationHub('messages');

                        expect(generationHub.client.maxPrimeLimit).toBeDefined();
                        expect(generationHub.client.primesRequestedOutOfRange).toBeDefined();
                        expect(generationHub.client.generatedNumbers).toBeDefined();
                        expect(generationHub.server.maxPrimeLimit).toBeDefined();
                        expect(generationHub.server.generateAmountOfPrimes).toBeDefined();
                    }
                );
            }
        );
});

describe('Tests for connectToNumberGenerationHub.', function () {

    describe('Try to connect to hub with hub set to null.',
        // Test connectToNumberGenerationHub with null hub
        function () {
            it('Should return message that a hub is required',
                function () {
                    var message = connectToNumberGenerationHub(null);

                    expect(message).toBe('You must supply a valid hub to start the connection.');
                });
        }
    )
        ,
        describe('Try to connect to hub with invalid hub.',
            // Test connectToNumberGenerationHub with wrong parameter type
            function () {
                it('Should return a message unable to connect due to invalid Hub',
                    function () {
                        var message = connectToNumberGenerationHub('');

                        expect(message).toBe('You must supply a valid hub to start the connection.');
                    });
            }
        );
    //,
    //describe('Try to connect to hub with valid hub.',
    //    // Test connectToNumberGenerationHub with valid hub
    //    function () {
    //        it('Should return the hub that was passed in ',
    //            function () {
    //                var numberGenerationHub = createNumberGenerationHub('messages');
    //                numberGenerationHub = connectToNumberGenerationHub(numberGenerationHub);

    //                expect(numberGenerationHub.client.maxPrimeLimit).toBeDefined();
    //            });
    //    }
    //)
});

describe('Tests for generatePrimeMultiplicationTable.', function () {

    describe('Try to create table with null sent as amountOfPrimes.',
        // Test generatePrimeMultiplicationTable with null amountOfPrimes
        function () {
            it('Should return message that the number of primes to generate is required.',
                function () {
                    var numberGenerationHub = createNumberGenerationHub('messages');
                    var message = generatePrimeMultiplicationTable(null, numberGenerationHub);

                    expect(message).toBe('You must specify the amount of primes to generate.');
                });
        }
    )
        ,
        describe('Try to create table with string sent as amountOfPrimes.',
            // Test generatePrimeMultiplicationTable with non int amountOfPrimes
            function () {
                it('Should return a message that the number of primes to generate must be a number.',
                    function () {
                        var numberGenerationHub = createNumberGenerationHub('messages');
                        var message = generatePrimeMultiplicationTable('NotValidNumber', numberGenerationHub);

                        expect(message).toBe('The number of primes to generate must be a number > 0.');
                    });
            }
        )
        ,
        describe('Try to create table with -1 sent as amountOfPrimes.',
            // Test generatePrimeMultiplicationTable with negative int amountOfPrimes
            function () {
                it('Should return a message that the number of primes to generate must be > 0.',
                    function () {
                        var numberGenerationHub = createNumberGenerationHub('messages');
                        var message = generatePrimeMultiplicationTable(-1, numberGenerationHub);

                        expect(message).toBe('The number of primes to generate must be a number > 0.');
                    });
            }
        )
        ,
        describe('Try to create table with 0 sent as amountOfPrimes.',
            // Test generatePrimeMultiplicationTable with 0 amountOfPrimes
            function () {
                it('Should return a message that the number of primes to generate must be > 0.',
                    function () {
                        var numberGenerationHub = createNumberGenerationHub('messages');
                        var message = generatePrimeMultiplicationTable(0, numberGenerationHub);

                        expect(message).toBe('The number of primes to generate must be a number > 0.');
                    });
            }
        )
        ,
        describe('Try to create table with null sent as generationHub.',
            // Test generatePrimeMultiplicationTable with null generationHub
            function () {
                it('Should return a message that a valid Hub must be supplied.',
                    function () {
                        var message = generatePrimeMultiplicationTable(1, null);

                        expect(message).toBe('You must specify a valid Generation Hub.');
                    });
            }
        );
});