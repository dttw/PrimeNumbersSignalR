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
    describe("Try to create table with 0 length array passed as table numbers.",
        function () {
            it("Should return message that a valid array of table numbers is required",

                function () {
                    var message = createMultiplicationTable([], "");

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
                    var table = createMultiplicationTable([1, 2, 3], "");

                    expect(header.html()).toContain('<table>');
                });
        }
    )
);

describe("Tests for createMultiplicationTableHeader.",
    // Test createMultiplicationTableHeader with null table numbers
    describe("Try to create header with null table numbers.",
        function () {
            it("Should return message that a valid array of table numbers is required",

                function () {
                    var message = createMultiplicationTableHeader(null);

                    expect(message).toBe("You must specify an array of ints to generate a header.");
                });
        }
    )
    ,
    describe("Try to create header with 0 length array of table numbers.",
        function () {
            it("Should return message that a valid array of table numbers is required",

                function () {
                    var message = createMultiplicationTableHeader([]);

                    expect(message).toBe("You must specify an array of ints to generate a header.");
                });
        }
    )
    ,
    // Test createMultiplicationTableHeader with non int table numbers
    describe("Try to create header with array of strings for table numbers.",
        function () {
            it("Should return message that a valid array of table numbers is required",

                function () {
                    var message = createMultiplicationTableHeader(["Not", "Valid", "Numbers"]);

                    expect(message).toBe("You must specify an array of ints to generate a header.");
                });
        }
    )
    ,
    // Test createMultiplicationTableHeader with valid table numbers
    describe("Try to create header with array of ints for table numbers.",
        function () {
            it("Should return an html table header row",

                function () {
                    var header = createMultiplicationTableHeader([1, 2, 3]);

                    expect(header.html()).toContain('<thead>');

                });
        }
    )
);

describe("Tests for createMultiplicationTableHeaderRow.",
    // Test createMultiplicationTableHeaderRow with null table numbers
    describe("Try to create header row with null passed for table numbers.",
        function () {
            it("Should return message that a valid array of table numbers is required",

                function () {
                    var message = createMultiplicationTableHeaderRow(null);

                    expect(message).toBe("You must specify an array of ints to generate a header.");
                });
        }
    )
    ,
    describe("Try to create header row with 0 length array for table numbers.",
        function () {
            it("Should return message that a valid array of table numbers is required",

                function () {
                    var message = createMultiplicationTableHeaderRow([]);

                    expect(message).toBe("You must specify an array of ints to generate a header.");
                });
        }
    )
    ,
    // Test createMultiplicationTableHeaderRow with non int table numbers
    describe("Try to create header row with array of strings for table numbers.",
        function () {
            it("Should return message that a valid array of table numbers is required",

                function () {
                    var message = createMultiplicationTableHeaderRow(["Not", "Valid", "Numbers"]);

                    expect(message).toBe("You must specify an array of ints to generate a header.");
                });
        }
    )
    ,
    // Test createMultiplicationTableHeaderRow with valid table numbers
    describe("Try to create header row with array of ints for table numbers.",
        function () {
            it("Should return an html header row",

                function () {
                    var header = createMultiplicationTableHeaderRow([1, 2, 3]);

                    expect(header.html()).toContain('<thead>');
                });
        }
    )
);

describe("Tests for createMultiplicationTableHeaderCell.",
    // Test createMultiplicationTableHeaderCell with null multiplicand
    describe("Try to create header cell with null passed for multiplicand.",
        function () {
            it("Should return message a number is required",

                function () {
                    var message = createMultiplicationTableHeaderCell(null);

                    expect(message).toBe("You must specify an non negative number to create a table cell.");
                });
        }
    )
    ,
    describe("Try to create header cell with -1 passed for multiplicand.",
        function () {
            it("Should return message that a non negative number is required",

                function () {
                    var message = createMultiplicationTableHeaderCell(-1);

                    expect(message).toBe("You must specify an non negative number to create a table cell.");
                });
        }
    )
    ,
    // Test createMultiplicationTableHeaderCell with non int multiplicand
    describe("Try to create header cell with string passed for multiplicand.",
        function () {
            it("Should return message that multiplicand must be a number",

                function () {
                    var message = createMultiplicationTableHeaderCell("NaN");

                    expect(message).toBe("You must specify a number to create a table cell.");
                });
        }
    )
    ,
    // Test createMultiplicationTableHeaderCell with valid multiplicand
    describe("Try to create header row with array of ints for table numbers.",
        function () {
            it("Should return an html table cell",

                function () {
                    var header = createMultiplicationTableHeaderCell(1);

                    expect(header.html()).toContain('<td>');
                });
        }
    )
);

// Test that createMultiplicationTableBody returns a valid table body

describe("Tests for createMultiplicationTableBody.",
    // Test createMultiplicationTableBody with null tableNumbers
    describe("Try to create a table body with null table numbers.",
        function () {
            it("Should return message an array of table numbers is required",

                function () {
                    var message = createMultiplicationTableBody(null);

                    expect(message).toBe("You must specify an array of numbers to generate a table body.");
                });
        }
    )
    ,
    describe("Try to create a table body with 0 length array.",
        function () {
            it("Should return message an array of table numbers is required",

                function () {
                    var message = createMultiplicationTableBody([]);

                    expect(message).toBe("You must specify an array of numbers to generate a table body.");
                });
        }
    )
    ,
    // Test createMultiplicationTableBody with non int tableNumbers
    describe("Try to create a table body with null table numbers.",
        function () {
            it("Should return message an array of table numbers is required",

                function () {
                    var message = createMultiplicationTableBody(["Not", "Valid", "Numbers"]);

                    expect(message).toBe("You must specify an array of numbers to generate a table body.");
                });
        }
    )
    ,
    // Test createMultiplicationTableBody with valid tableNumbers
    describe("Try to create a table body with an array of int table numbers.",
        function () {
            it("Should return an html table body",

                function () {
                    var tableBody = createMultiplicationTableBody([1, 2, 3]);

                    expect(header.html()).toContain('<td>');
                });
        }
    )
);


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