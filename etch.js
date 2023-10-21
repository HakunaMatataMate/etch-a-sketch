const grid = document.querySelector('#grid')

//Retrieve slider input
var slider = document.getElementById("myRange");
var output = document.getElementById("size");
output.innerText = slider.value + ` X ` + slider.value;

// Function to create the dimensions of the grid from the slider
slider.oninput = function findValue() {
    const val = slider.value;

    //Line 13 specifically changes the value of the dimensions in the "size" div
    output.innerText = slider.value + ` X ` + slider.value;

    //Line 16 makes the grid reset when the dimensions are changed
    grid.replaceChildren();

    for (let i = 0; i < val; i++) {
        for (let j = 0; j < val; j++) {
            const cell = document.createElement('cell');
            cell.classList.add('cell');
            grid.style.gridTemplateRows = `repeat(${val}, 1fr)`;
            grid.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
            grid.appendChild(cell);
        }
    }

    //Add mouseover event to change the colour of the cells
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        //Line 33 specifically generates random number so that a random colour is generated later
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        cell.addEventListener('mouseover', (e) => {
            cell.style.backgroundColor = "#" + randomColor;
            console.log(randomColor);
        })
    })    
}  

//Function to reset the grid back to it's original color
function reset() {
    let cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        cell.style.backgroundColor = "lightblue";
    })
}
