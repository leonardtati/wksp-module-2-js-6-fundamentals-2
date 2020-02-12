// Exercise 2.2 - the Custom Grid
// ------------

// Use the grid code you wrote in 2.1

// Objectives
// Allow the user to create cells on the board based on values he/she inputs.
// - Ask the user the number of ROWS and COLUMNS
// - Use those values to generate a grid

// Hints
// - use the 'blur' event
// - one event listener per input

// If you need extra hints, see somebody... :)
const board = document.getElementById('board');
const rowsInput = document.getElementById('rows-input');
const columnsInput = document.getElementById('columns-input')

const BOARD_SIZE = 600;
let ROWS ;
let COLUMNS;

board.style.width = `${BOARD_SIZE}px`;
board.style.height = `${BOARD_SIZE}px`;

function createBoard(){
    if(ROWS >0 && COLUMNS >0){
        board.innerHTML = '';
        board.style.gridTemplateRows = `repeat(${ROWS}, 1fr)`;
        board.style.gridTemplateColumns = `repeat(${COLUMNS}, 1fr)`;


        for (let i = 0; i < ROWS * COLUMNS; i++) {
    const cell = document.createElement('div');
    cell.id = `cell-${i}`;
    cell.classList.add('cell');
    board.appendChild(cell);
        }
    }
};

function handleRows(event){
    ROWS = event.target.value;
    createBoard();
    console.log(handleRows(event))

}

function handleColumns(event){
    COLUMNS = event.target.value;
    createBoard();
}



rowsInput.addEventListener('blur', handleRows);
columnsInput.addEventListener('blur', handleColumns);
