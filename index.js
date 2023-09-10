const canvas = document.querySelector("#canvas") 
var isDrawing = false; 

const paint_button = document.querySelector(".paint") 
paint_button.addEventListener('click', changeDrawingStatus)

function addBoxes(gridSize){

    canvas.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    canvas.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

    for(i = 0; i<gridSize * gridSize; i++){
        var grid_box = document.createElement("div") 
        grid_box.classList.add('box')

        grid_box.addEventListener("mouseover", changeColor) 
        grid_box.addEventListener("mousedown", changeColor) 
        canvas.appendChild(grid_box) 
    }

}

addBoxes(16)

function changeDrawingStatus(e){
    if(isDrawing == false){
        isDrawing = true; 
        e.target.style.backgroundColor = "lightgreen"; 
    }else{
        isDrawing = false; 
        e.target.style.backgroundColor = "";
    }
}

function changeColor(e){

    if(isDrawing){
        e.target.style.backgroundColor = 'black'; 
    }
}
