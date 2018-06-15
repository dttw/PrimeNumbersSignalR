// TODO: function to accept an array of positive ints
// TODO: function to write the table from numbers supplied
// TODO: Display numbers in max of 50 * 50 chunks
// TODO: Page around table horizontally and vertically in 50 * 50 chunks

function createMultiplicationTable(tableNumbers, tableClass) {
    // TODO: Create table
    // TODO: Create header and add to table
    // TODO: Create body and add to table
    // TODO: Return table
}

function createMultiplicationTableHeader(tableNumbers) {
    // Create table header
    var tableHeader = $('<thead></thead>');

    tableHeader.append(createMultiplicationTableHeaderRow(tableNumbers));

    // Return table header
    return tableHeader;
}

function createMultiplicationTableHeaderRow(tableNumbers) {
    // TODO: Create header row
    // TODO: Return header row
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