const canvas = document.querySelector("#canvas") 
var isDrawing = false; 
var box_color = '#000000'; 

const paint_button = document.querySelector(".paint") 
paint_button.addEventListener('click', changeDrawingStatus)

const color_picker = document.querySelector(".color-picker")
color_picker.addEventListener('input', changeColor) 

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


function main(){
    addBoxes(16) 
}


main() 