'use strict';

const example = [1, 2, 3, ['a', 'b', 'c', [55, 66, 77]], 4];

const tableWidth = 10;
const tableHeight = 10;

//creating a list

const $myList = document.querySelector('.my-list');

function generateList(arr) {
    let $ul = document.createElement('ul');

    arr.forEach(element => {
        let $li = document.createElement('li');

        if (Array.isArray(element)) {
            $li.innerHTML += generateList(element);
        } else {
            $li.textContent = element;
        }

        $ul.innerHTML += $li.outerHTML;
    });

    return $ul.outerHTML;
}

$myList.innerHTML += generateList(example);

//creating a table 

const $myTable = document.querySelector('.my-table');

let $tbl = document.createElement('table');

let $tblBody = document.createElement('tbody');

for (let i = 0; i < tableHeight; i++) {
    let $tblRow = document.createElement('tr');

    let $tblCell = document.createElement('td');

    for (let j = 0; j < tableWidth; j++) {
        $tblCell.textContent = i * tableWidth + j + 1;
        $tblRow.innerHTML += $tblCell.outerHTML;
    }

    $tblBody.innerHTML += $tblRow.outerHTML;
}

$tbl.innerHTML += $tblBody.outerHTML;

$myTable.innerHTML += $tbl.outerHTML;
