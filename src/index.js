'use strict';

const tableWidth = 10;
const tableHeight = 10;

const $myTable = document.querySelector('.my-table');

let $tbl = document.createElement('table');

let $tblBody = document.createElement('tbody');

for (let i = 0; i < tableHeight; i++) {
    let $tblRow = document.createElement('tr');

    let $tblCell = document.createElement('td');
    for (let j = 0; j < tableWidth; j++) {
        $tblCell.textContent = i * tableWidth + j;
        $tblRow.innerHTML += $tblCell.outerHTML;
    }

    $tblBody.innerHTML += $tblRow.outerHTML;
}

$tbl.innerHTML += $tblBody.outerHTML;

$myTable.innerHTML += $tbl.outerHTML;

console.log($myTable);
