/// <reference path='../Scripts/jasmine/jasmine.js' />
/// <reference path='../Scripts/jquery-3.3.1.min.js' />
/// <reference path='../Source/multiplicationtable.js' />

describe('Tests for createMultiplicationTable.',
    // Test createMultiplicationTable with null table numbers
    describe('Try to create table with null passed as table numbers.',
        function () {
            it('Should return message that a valid array of table numbers is required',

                function () {
                    var message = createMultiplicationTable(null, 'tableClass');

                    expect(message).toBe('You must specify an array of ints to generate a table.');
                });
        }
    )
    ,
    describe('Try to create table with 0 length array passed as table numbers.',
        function () {
            it('Should return message that a valid array of table numbers is required',

                function () {
                    var message = createMultiplicationTable([], 'tableClass');

                    expect(message).toBe('You must specify an array of ints to generate a table.');
                });
        }
    )
    ,
    // Test createMultiplicationTable with non int table numbers
    describe('Try to create table with strings passed as table numbers.',
        function () {
            it('Should return message that a valid array of table numbers is required',

                function () {
                    var message = createMultiplicationTable(['Not', 'Valid', 'Numbers'], 'tableClass');

                    expect(message).toBe('You must specify an array of ints to generate a table.');
                });
        }
    )
    ,
    // Test createMultiplicationTable with null table class
    describe('Try to create table with null passed as table class.',
        function () {
            it('Should return message that a table class is required',

                function () {
                    var message = createMultiplicationTable([1, 2, 3], null);

                    expect(message).toBe('You must specify a table class to generate a table.');
                });
        }
    )
    ,
    // Test createMultiplicationTable with non string table class
    describe('Try to create table with null passed as table class.',
        function () {
            it('Should return message that a table class is required',

                function () {
                    var message = createMultiplicationTable([1, 2, 3], '');

                    expect(message).toBe('You must specify a table class to generate a table.');
                });
        }
    )
    ,
    // Test createMultiplicationTable with valid table numbers & table class
    describe('Try to create table with valid table numbers and table class.',
        function () {
            it('Should return an html table',

                function () {
                    var generatedTable = createMultiplicationTable([1, 2, 3], '');

                    expect(generatedTable.is('table')).toBeTruthy();

                    expect(generatedTable.html()).toContain('X');
                    expect(generatedTable.html()).toContain('1');
                    expect(generatedTable.html()).toContain('2');
                    expect(generatedTable.html()).toContain('3');
                    expect(generatedTable.html()).toContain('4');
                    expect(generatedTable.html()).toContain('6');
                    expect(generatedTable.html()).toContain('9');
                });
        }
    )
);

describe('Tests for createMultiplicationTableHeader.',
    // Test createMultiplicationTableHeader with null table numbers
    describe('Try to create header with null table numbers.',
        function () {
            it('Should return message that a valid array of table numbers is required',

                function () {
                    var message = createMultiplicationTableHeader(null);

                    expect(message).toBe('You must specify an array of ints to generate a header.');
                });
        }
    )
    ,
    describe('Try to create header with 0 length array of table numbers.',
        function () {
            it('Should return message that a valid array of table numbers is required',

                function () {
                    var message = createMultiplicationTableHeader([]);

                    expect(message).toBe('You must specify an array of ints to generate a header.');
                });
        }
    )
    ,
    // Test createMultiplicationTableHeader with non int table numbers
    describe('Try to create header with array of strings for table numbers.',
        function () {
            it('Should return message that a valid array of table numbers is required',

                function () {
                    var message = createMultiplicationTableHeader(['Not', 'Valid', 'Numbers']);

                    expect(message).toBe('You must specify an array of ints to generate a header.');
                });
        }
    )
    ,
    // Test createMultiplicationTableHeader with valid table numbers
    describe('Try to create header with array of ints for table numbers.',
        function () {
            it('Should return an html table header row',

                function () {
                    var generatedTableHeader = createMultiplicationTableHeader([1, 2, 3]);

                    expect(generatedTableHeader.is('thead')).toBeTruthy();

                    expect(generatedTableHeader.html()).toContain('X');

                });
        }
    )
);

describe('Tests for createMultiplicationTableHeaderRow.',
    // Test createMultiplicationTableHeaderRow with null table numbers
    describe('Try to create header row with null passed for table numbers.',
        function () {
            it('Should return message that a valid array of table numbers is required',

                function () {
                    var message = createMultiplicationTableHeaderRow(null);

                    expect(message).toBe('You must specify an array of ints to generate a header.');
                });
        }
    )
    ,
    describe('Try to create header row with 0 length array for table numbers.',
        function () {
            it('Should return message that a valid array of table numbers is required',

                function () {
                    var message = createMultiplicationTableHeaderRow([]);

                    expect(message).toBe('You must specify an array of ints to generate a header.');
                });
        }
    )
    ,
    // Test createMultiplicationTableHeaderRow with non int table numbers
    describe('Try to create header row with array of strings for table numbers.',
        function () {
            it('Should return message that a valid array of table numbers is required',

                function () {
                    var message = createMultiplicationTableHeaderRow(['Not', 'Valid', 'Numbers']);

                    expect(message).toBe('You must specify an array of ints to generate a header.');
                });
        }
    )
    ,
    // Test createMultiplicationTableHeaderRow with valid table numbers
    describe('Try to create header row with array of ints for table numbers.',
        function () {
            it('Should return an html header row',

                function () {
                    var generatedTableHeader = createMultiplicationTableHeaderRow([1, 2, 3]);

                    expect(generatedTableHeader.is('thead')).toBeTruthy();

                    expect(generatedTableHeader.html()).toContain('3');
                });
        }
    )
);

describe('Tests for createMultiplicationTableHeaderCell.',
    // Test createMultiplicationTableHeaderCell with null multiplicand
    describe('Try to create header cell with null passed for multiplicand.',
        function () {
            it('Should return message a number is required',

                function () {
                    var message = createMultiplicationTableHeaderCell(null);

                    expect(message).toBe('You must specify an non negative number to create a table cell.');
                });
        }
    )
    ,
    describe('Try to create header cell with -1 passed for multiplicand.',
        function () {
            it('Should return message that a non negative number is required',

                function () {
                    var message = createMultiplicationTableHeaderCell(-1);

                    expect(message).toBe('You must specify an non negative number to create a table cell.');
                });
        }
    )
    ,
    // Test createMultiplicationTableHeaderCell with non int multiplicand
    describe('Try to create header cell with string passed for multiplicand.',
        function () {
            it('Should return message that multiplicand must be a number',

                function () {
                    var message = createMultiplicationTableHeaderCell('NaN');

                    expect(message).toBe('You must specify a number to create a table cell.');
                });
        }
    )
    ,
    // Test createMultiplicationTableHeaderCell with valid multiplicand
    describe('Try to create header row with array of ints for table numbers.',
        function () {
            it('Should return an html table header cell',

                function () {
                    var generatedHeaderCell = createMultiplicationTableHeaderCell(1);

                    expect(generatedHeaderCell.is('th')).toBeTruthy();

                    expect(generatedHeaderCell.html()).toContain('1');
                });
        }
    )
);

describe('Tests for createMultiplicationTableBody.',
    // Test createMultiplicationTableBody with null tableNumbers
    describe('Try to create a table body with null table numbers.',
        function () {
            it('Should return message an array of table numbers is required',

                function () {
                    var message = createMultiplicationTableBody(null);

                    expect(message).toBe('You must specify an array of numbers to generate a table body.');
                });
        }
    )
    ,
    describe('Try to create a table body with 0 length array.',
        function () {
            it('Should return message an array of table numbers is required',

                function () {
                    var message = createMultiplicationTableBody([]);

                    expect(message).toBe('You must specify an array of numbers to generate a table body.');
                });
        }
    )
    ,
    // Test createMultiplicationTableBody with non int tableNumbers
    describe('Try to create a table body with null table numbers.',
        function () {
            it('Should return message an array of table numbers is required',

                function () {
                    var message = createMultiplicationTableBody(['Not', 'Valid', 'Numbers']);

                    expect(message).toBe('You must specify an array of numbers to generate a table body.');
                });
        }
    )
    ,
    // Test createMultiplicationTableBody with valid tableNumbers
    describe('Try to create a table body with an array of int table numbers.',
        function () {
            it('Should return an html table body',

                function () {
                    var generatedTableBody = createMultiplicationTableBody([1, 2, 3]);

                    expect(generatedTableBody.is('tbody')).toBeTruthy();

                    expect(generatedTableBody.html()).toContain('9');
                });
        }
    )
);

describe('Tests for createMultiplicationTableRow.',
    // Test createMultiplicationTableRow with null multiplier
    describe('Try to create a table row with null multiplier.',
        function () {
            it('Should return message that a multipler is required',

                function () {
                    var message = createMultiplicationTableRow(null);

                    expect(message).toBe('You must specify a multiplier.');
                });
        }
    )
    ,
    // Test createMultiplicationTableRow with -1 multiplier
    describe('Try to create a table row with -1 multiplier.',
        function () {
            it('Should return message that a multipler cannot be negative',

                function () {
                    var message = createMultiplicationTableRow(0);

                    expect(message).toBe('You must specify a multiplier >= 0.');
                });
        }
    )
    ,
    // Test createMultiplicationTableRow with non int multiplier
    describe('Try to create a table row with string multiplier.',
        function () {
            it('Should return message that a multipler must be an int',

                function () {
                    var message = createMultiplicationTableRow('NaN');

                    expect(message).toBe('You must specify an int for multiplier.');
                });
        }
    )
    ,
    // Test createMultiplicationTableRow with null tableNumbers
    describe('Try to create a table row with null array of table numbers.',
        function () {
            it('Should return message that an array of table numbers is required',

                function () {
                    var message = createMultiplicationTableRow(1, null);

                    expect(message).toBe('You must specify an array of ints for table numbers.');
                });
        }
    )
    ,
    // Test createMultiplicationTableRow with empty array for tableNumbers
    describe('Try to create a table row with 0 length array for table numbers.',
        function () {
            it('Should return message that an array of table numbers is required',

                function () {
                    var message = createMultiplicationTableRow(1, []);

                    expect(message).toBe('You must specify an array of ints for table numbers.');
                });
        }
    )
    ,
    // Test createMultiplicationTableRow with non int tableNumbers
    describe('Try to create a table row with array of strings for table numbers.',
        function () {
            it('Should return message that an array of table numbers is required',

                function () {
                    var message = createMultiplicationTableRow(1, ['Not', 'Valid', 'Numbers']);

                    expect(message).toBe('You must specify an array of ints for table numbers.');
                });
        }
    )
    ,
    // Test createMultiplicationTableRow with valid multiplier & tableNumbers
    describe('Try to create a table row with array of strings for table numbers.',
        function () {
            it('Should return an html row containing the correct values',

                function () {
                    var generatedTableRow = createMultiplicationTableRow(3, [1, 2, 3]);

                    expect(generatedTableRow.is('tr')).toBeTruthy();

                    expect(generatedTableRow.html()).toContain('9');
                });
        }
    )
)

describe('Tests for createMultiplicationTableCell.',
    // Test createMultiplicationTableCell with null multiplier
    describe('Try to create a table cell with null multiplier.',
        function () {
            it('Should return message that a multipler is required',

                function () {
                    var message = createMultiplicationTableCell(null, 1);

                    expect(message).toBe('You must specify a multiplier.');
                });
        }
    )
    ,
    // Test createMultiplicationTableCell with  -1 multiplier
    describe('Try to create a table cell with -1 multiplier.',
        function () {
            it('Should return message that a multiplier cannot be negative',

                function () {
                    var message = createMultiplicationTableCell(-1, 1);

                    expect(message).toBe('You must specify a multiplier >= 0.');
                });
        }
    )
    ,
    // Test createMultiplicationTableCell with non int multiplier
    describe('Try to create a table cell with string multiplier.',
        function () {
            it('Should return message that a multiplier must be an integer',

                function () {
                    var message = createMultiplicationTableCell('NaN', 1);

                    expect(message).toBe('You must specify an int for multiplier.');
                });
        }
    )
    ,
    // Test createMultiplicationTableCell with non int multiplier
    describe('Try to create a table cell with string multiplier.',
        function () {
            it('Should return message that a multiplier must be an integer',

                function () {
                    var message = createMultiplicationTableCell('NaN', 1);

                    expect(message).toBe('You must specify an int for multiplier.');
                });
        }
    )
    ,
    // Test createMultiplicationTableCell with null multiplicand
    describe('Try to create a table cell with null multiplicand.',
        function () {
            it('Should return message that a multiplicand is required',

                function () {
                    var message = createMultiplicationTableCell(1, null);

                    expect(message).toBe('You must specify a multiplicand.');
                });
        }
    )
    ,
    // Test createMultiplicationTableCell with -1 multiplicand
    describe('Try to create a table cell with -1 multiplicand.',
        function () {
            it('Should return message that a multiplicand cannot be negative',

                function () {
                    var message = createMultiplicationTableCell(1, -1);

                    expect(message).toBe('You must specify a multiplicand >= 0.');
                });
        }
    )
    ,
    // Test createMultiplicationTableCell with non int multiplicand
    describe('Try to create a table cell with string multiplicand.',
        function () {
            it('Should return message that a multiplicand must be an integer',

                function () {
                    var message = createMultiplicationTableCell(1, 'NaN');

                    expect(message).toBe('You must specify an int for multiplicand.');
                });
        }
    )
    ,
    // Test createMultiplicationTableCell with valid multiplier & multiplicand
    describe('Try to create a table cell with valid multiplier and multiplicand.',
        function () {
            it('Should return an html table cell with the correct multiplied value.',

                function () {
                    var generatedTableCell = createMultiplicationTableCell(1, 2);

                    expect(generatedTableCell.is('td')).toBeTruthy();

                    expect(generatedTableCell.html()).toContain('2');
                });
        }
    )
)