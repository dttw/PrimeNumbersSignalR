// TODO: Display numbers in max of 50 * 50 chunks
// TODO: Page around table horizontally and vertically in 50 * 50 chunks

// Creates a fll multiplicaton table from an array of numbers with a specified table css class.
function createMultiplicationTable(tableNumbers, tableCssClass) {

    if (typeof tableCssClass === 'undefined' || tableCssClass === null || tableCssClass === '') {
        return 'You must specify a table class to generate a table.';
    }

    if (typeof tableNumbers === 'undefined' || tableNumbers === null || tableNumbers.length === 0 || tableNumbers.some(isNaN)) {
        return 'You must specify an array of ints to generate a table.';
    }

    //Create table
    var table = $('<table></table>').addClass(tableCssClass);

    //Create header and add to table
    table.append(createMultiplicationTableHeader(tableNumbers));

    //Create body and add to table
    table.append(createMultiplicationTableBody(tableNumbers));

    // Return table
    return table;
}

// Creates the header section of a multiplication table using the numbers supplied.
function createMultiplicationTableHeader(tableNumbers) {

    if (typeof tableNumbers === 'undefined' || tableNumbers === null || tableNumbers.length === 0 || tableNumbers.some(isNaN)) {
        return 'You must specify an array of ints to generate a header.';
    }

    // Create table header
    var tableHeader = $('<thead></thead>');

    tableHeader.append(createMultiplicationTableHeaderRow(tableNumbers));

    // Return table header
    return tableHeader;
}

// Creates the header row of a multiplication table. Differs from a normal table in that an X is added as the first cell of the header.
function createMultiplicationTableHeaderRow(tableNumbers) {

    if (typeof tableNumbers === 'undefined' || tableNumbers === null || tableNumbers.length === 0 || tableNumbers.some(isNaN)) {
        return 'You must specify an array of ints to generate a header.';
    }

    //creates header row
    var headerRow = $('<tr></tr>');

    // Creates the cell for the header with style
    var tableHeaderCell = $('<th></th>').addClass('factorCell');

    // Adds the X to the top left corner of the table
    headerRow.append(tableHeaderCell.clone().text('X'));

    // Adds each number for the table into the header row
    tableNumbers.forEach(
        function (multiplicand) {
            headerRow.append(createMultiplicationTableHeaderCell(multiplicand));
        });
    return headerRow;
}

// Creates a table header cell for an individual number.
function createMultiplicationTableHeaderCell(multiplicand) {

    if (typeof multiplicand === 'undefined' || multiplicand === null || isNaN(multiplicand) || multiplicand < 0) {
        return 'You must specify an non negative number to create a header cell.';
    }

    // Create header cell
    var tableHeaderCell = $('<th></th>').addClass('factorCell');

    // Return header cell
    return tableHeaderCell.clone().text(multiplicand);
}

// Creates the table body section using the numbers supplied. 
function createMultiplicationTableBody(tableNumbers) {
    //  Create table body
    if (typeof tableNumbers === 'undefined' || tableNumbers === null || tableNumbers.length === 0 || tableNumbers.some(isNaN)) {
        return 'You must specify an array of ints to generate a table body.';
    }

    var tableBody = $('<tbody></tbody>');

    tableNumbers.forEach(
        function (multiplier) {
            tableBody.append(createMultiplicationTableRow(multiplier, tableNumbers)); //Add the row to the table body.
        }
    )
    //  Return table body
    return tableBody;
}

// Creates an individual table row. Row contains the multiplier in the first column and then multiplier * each number that makes up the table
function createMultiplicationTableRow(multiplier, tableNumbers) {

    if (typeof multiplier === 'undefined' || multiplier === null || isNaN(multiplier) || multiplier < 0) {
        return 'You must specify an non negative multiplier to create a table row.';
    }

    if (typeof tableNumbers === 'undefined' || tableNumbers === null || tableNumbers.length === 0 || tableNumbers.some(isNaN)) {
        return 'You must specify an array of ints to generate a table row.';
    }

    var tableRow = $('<tr></tr>');
    var factorCell = $('<td></td>').addClass('factorCell');

    var row = tableRow.clone();

    //Create the cell showing the multiplier for the row.
    row.append(factorCell.clone().text(multiplier));

    // Create each of the cells for the multiplier * each number in the list of table numbers
    row.append(
        tableNumbers.forEach(
            function (multiplicand) {
                row.append(createMultiplicationTableCell(multiplier, multiplicand));
            }));
    return row;
}

// Creates an individual table cell, text is set as multiplier * multiplicand.
function createMultiplicationTableCell(multiplier, multiplicand) {

    if (typeof multiplier === 'undefined' || multiplier === null || isNaN(multiplier) || multiplier < 0) {
        return 'You must specify an non negative multiplier to create a table cell.';
    }

    if (typeof multiplicand === 'undefined' || multiplicand === null || isNaN(multiplicand) || multiplicand < 0) {
        return 'You must specify an non negative multiplicand to create a table cell.';
    }

    //Create table cell
    var tableCell = $('<td></td>').clone();

    tableCell.text(multiplier * multiplicand);
    //return table cell
    return tableCell;
}