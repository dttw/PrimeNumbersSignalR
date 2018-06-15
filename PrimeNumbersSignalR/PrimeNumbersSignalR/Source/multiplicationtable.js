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
    // TODO: Create table header
    // TODO: Return table header
}

function createMultiplicationTableHeaderRow(tableNumbers) {
    // TODO: Create header row
    // TODO: Return header row
}

function createMultiplicationTableHeaderCell(multiplicand) {
    // TODO: Create header cell
    // TODO: Return header cell
}

function createMultiplicationTableBody(tableNumbers) {
    // TODO: Create table body
    // TODO: Return table body
}

function createMultiplicationTableRow(multiplier, tableNumbers) {
    var tableRow = $('<tr></tr>');
    var factorCell = $('<td></td>').addClass('factorCell');

    var row = tableRow.clone();

    //Create the cell showing the multiplier for the row.
    row.append(factorCell.clone().text(multiplier));

    // Create each of the cells for the multiplier * each number in the list of table numbers
    row.append(
        tableNumbers.forEach(
            function (multiplicand) {
                row.append(createMultiplicationTableCell(multiplier * multiplicand));
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

    if (multiplier < 0) {
        return 'You must specify a multiplier >= 0.';
    }

    if (multiplicand < 0) {
        return 'You must specify a multiplicand >= 0.';
    }

    //Create table cell
    var tableCell = $('<td></td>').clone();

    tableCell.text(multiplier * multiplicand);
    //return table cell
    return tableCell;
}