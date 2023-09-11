const canvas = document.querySelector("#canvas") 
var isDrawing = false; 
var box_color = '#000000'; 

function setRandomColor(e){
    var red = Math.ceil(Math.random() * 255) 
    var green = Math.ceil(Math.random() * 255)
    var blue = Math.ceil(Math.random() * 255)

    var color = `#${red}${green}${blue}`

    e.target.style.backgroundColor = color; 
    console.log(color) 
    setColor(color) 
}

function setColor(color){
    box_color = color 
}

function changeColor(e){
    setColor(e.target.value) 
}

function addBoxes(gridSize){

    canvas.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    canvas.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

    for(i = 0; i<gridSize * gridSize; i++){
        var grid_box = document.createElement("div") 
        grid_box.classList.add('box')

        grid_box.addEventListener("mouseover", fillColor) 
        grid_box.addEventListener("mousedown", fillColor) 
        canvas.appendChild(grid_box) 
    }

}

function changeDrawingStatus(e){
    if(isDrawing == false){
        isDrawing = true; 
        e.target.style.backgroundColor = "lightgreen"; 
    }else{
        isDrawing = false; 
        e.target.style.backgroundColor = "";
    }
}

function fillColor(e){

    if(isDrawing){
        e.target.style.backgroundColor = box_color; 
    }
}

var gridSize = 16; 
function createGrid(){

    var gridSizeLabel = document.querySelector("#grid-size-label") 

    gridSizeLabel.textContent = `${gridSize}x${gridSize}`
    canvas.textContent = ''; 
    addBoxes(gridSize) 
}


function main(){ 

    const paint_button = document.querySelector(".paint") 
    paint_button.addEventListener('click', changeDrawingStatus)

    const color_picker = document.querySelector(".color-picker")
    color_picker.addEventListener('input', changeColor) 

    const random_color_button =document.querySelector(".random-color")
    random_color_button.addEventListener('click', setRandomColor) 

    var gridSizeInput = document.querySelector("#grid-size"); 
    gridSizeInput.addEventListener('input', (e) => {
        gridSize = e.target.value; 
        createGrid(); 
    });

    const reset_button = document.querySelector(".reset")
    reset_button.addEventListener('click', createGrid); 

    addBoxes(16)
}
main() 