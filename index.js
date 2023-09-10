const canvas = document.querySelector("#canvas") 

function addBoxes(gridSize){

    canvas.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    canvas.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

    for(i = 0; i<gridSize * gridSize; i++){
        var grid_box = document.createElement("div") 
        grid_box.classList.add('box')

        grid_box.addEventListener("mouseover", changeColor) 
        canvas.appendChild(grid_box) 
    }

}

addBoxes(16)


function changeColor(e){
    e.target.style.backgroundColor = 'black' 
}
