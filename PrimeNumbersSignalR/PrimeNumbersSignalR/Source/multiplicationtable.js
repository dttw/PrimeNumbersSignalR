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
    // TODO: Create table body
    // TODO: return table body
}

function createMultiplicationTableCell(multiplier, multiplicand) {
    //Create table cell
    var tableCell = $('<td></td>').clone();

    tableCell.text(multiplier * multiplicand);
    //return table cell
    return tableCell;
}