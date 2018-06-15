// TODO: function to accept an array of positive ints
// TODO: function to write the table from numbers supplied
// TODO: Display numbers in max of 50 * 50 chunks
// TODO: Page around table horizontally and vertically in 50 * 50 chunks

function createMultiplicationTable(tableNumbers, tableClass) {
    if (typeof tableNumbers === 'undefined' || tableNumbers === null || tableNumbers.length === 0) {
        return 'You must specify an array of ints to generate a table.';
    }

    //Create table
    var table = $('<table></table>').addClass(tableClass);

    //Create header and add to table
    table.append(this.multiplicationTableHeader(tableNumbers));

    //Create body and add to table
    table.append(this.multiplicationTableBody(tableNumbers));

    // Return table
    return table;
}

function createMultiplicationTableHeader(tableNumbers) {
    // Create table header
    var tableHeader = $('<thead></thead>');

    tableHeader.append(createMultiplicationTableHeaderRow(tableNumbers));

    // Return table header
    return tableHeader;
}

function createMultiplicationTableHeaderRow(tableNumbers) {
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

function createMultiplicationTableHeaderCell(multiplicand) {
    // Create header cell
    var tableHeaderCell = $('<th></th>').addClass('factorCell');

    // Return header cell
    return tableHeaderCell.clone().text(multiplicand);
}

function createMultiplicationTableBody(tableNumbers) {
    //  Create table body

    var tableBody = $('<tbody></tbody>');

    tableNumbers.forEach(
        function (multiplier) {
            tableBody.append(createMultiplicationTableRow(multiplier, tableNumbers)); //Add the row to the table body.
        }
    )
    //  Return table body
    return tableBody;

}

function createMultiplicationTableRow(multiplier, tableNumbers) {

    if (typeof multiplier === 'undefined' || multiplier === null) {
        return 'You must specify a multiplier.';
    }

    if (typeof multiplier === 'string') {
        return 'You must specify an int for multiplier.';
    }

    if (multiplier < 0) {
        return 'You must specify a multiplier >= 0.';
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

function createMultiplicationTableCell(multiplier, multiplicand) {

    if (typeof multiplier === 'undefined' || multiplier === null) {
        return 'You must specify a multiplier.';
    }

    if (typeof multiplicand === 'undefined' || multiplicand === null) {
        return 'You must specify a multiplicand.';
    }

    if (typeof multiplier === 'string') {
        return 'You must specify an int for multiplier.';
    }

    if (typeof multiplicand === 'string') {
        return 'You must specify an int for multiplicand.';
    }

    if (multiplier < 0) {
        return 'You must specify a multiplier >= 0.';
    }

    if (multiplicand < 0 || typeof amountOfPrimes === 'string') {
        return 'You must specify a multiplicand >= 0.';
    }

    //Create table cell
    var tableCell = $('<td></td>').clone();

    tableCell.text(multiplier * multiplicand);
    //return table cell
    return tableCell;
}