/// <reference path="../Scripts/jasmine/jasmine.js" />
/// <reference path="../Source/multiplicationtable.js" />

describe("Tests for createMultiplicationTable.",
    // Test createMultiplicationTable with null table numbers
    describe("Try to create table with null passed as table numbers.",
        function () {
            it("Should return message that a valid array of table numbers is required",

                function () {
                    var message = createMultiplicationTable(null, "");

                    expect(message).toBe("You must specify an array of ints to generate a table.");
                });
        }
    )
    ,
    // Test createMultiplicationTable with non int table numbers
    describe("Try to create table with strings passed as table numbers.",
        function () {
            it("Should return message that a valid array of table numbers is required",

                function () {
                    var message = createMultiplicationTable(["Not", "Valid", "Numbers"], "");

                    expect(message).toBe("You must specify an array of ints to generate a table.");
                });
        }
    )
    ,
    // Test createMultiplicationTable with null table class
    describe("Try to create table with null passed as table class.",
        function () {
            it("Should return message that a table class is required",

                function () {
                    var message = createMultiplicationTable([1, 2, 3], null);

                    expect(message).toBe("You must specify a table class to generate a table.");
                });
        }
    )
    ,
    // Test createMultiplicationTable with non string table class
    describe("Try to create table with null passed as table class.",
        function () {
            it("Should return message that a table class is required",

                function () {
                    var message = createMultiplicationTable([1, 2, 3], "");

                    expect(message).toBe("You must specify a table class to generate a table.");
                });
        }
    )
    ,
    // Test createMultiplicationTable with valid table numbers & table class
    describe("Try to create table with valid table numbers and table class.",
        function () {
            it("Should return an html table",

                function () {
                    var message = createMultiplicationTable([1, 2, 3], "");

                    expect(message).toBe("You must specify a table class to generate a table.");
                });
        }
    )
);

// Test createMultiplicationTableHeader with null table numbers
// Test createMultiplicationTableHeader with non int table numbers
// Test createMultiplicationTableHeader with valid table numbers
// Test that createMultiplicationTableHeader returns a valid table header


// Test createMultiplicationTableHeaderRow with null table numbers
// Test createMultiplicationTableHeaderRow with non int table numbers
// Test createMultiplicationTableHeaderRow with valid table numbers
// Test that createMultiplicationTableHeaderRow returns a valid table header row


// Test createMultiplicationTableHeaderCell with null multiplicand
// Test createMultiplicationTableHeaderCell with non int multiplicand
// Test createMultiplicationTableHeaderCell with valid multiplicand
// Test that createMultiplicationTableHeaderCell returns a valid table header cell


// Test createMultiplicationTableBody with null tableNumbers
// Test createMultiplicationTableBody with non int tableNumbers
// Test createMultiplicationTableBody with valid tableNumbers
// Test that createMultiplicationTableBody returns a valid table body


// Test createMultiplicationTableRow with null multiplier
// Test createMultiplicationTableRow with non int multiplier
// Test createMultiplicationTableRow with valid multiplier
// Test createMultiplicationTableRow with non int tableNumbers
// Test createMultiplicationTableRow with valid tableNumbers
// Test createMultiplicationTableRow with null tableNumbers & tableNumbers
// Test that createMultiplicationTableRow returns a valid table row


// Test createMultiplicationTableCell with null multiplier
// Test createMultiplicationTableCell with non int multiplier
// Test createMultiplicationTableCell with valid multiplier
// Test createMultiplicationTableCell with null multiplicand
// Test createMultiplicationTableCell with non int multiplicand
// Test createMultiplicationTableCell with valid multiplier & multiplicand
// Test that createMultiplicationTableCell returns a valid table cell