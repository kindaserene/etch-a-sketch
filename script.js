const gridContainer = document.getElementById("grid-container");
const slider = document.getElementById("grid-slider");
const btn = document.getElementById("grid-size");
let isMouseDown = false;

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridContainer.append(gridSquare);
    
        gridSquare.addEventListener("mousedown", () => 
            {
                isMouseDown = true;
                gridSquare.style.backgroundColor = "#FFA2B9";
            })
        gridSquare.addEventListener("mouseenter", () => 
            {
                if (isMouseDown === true) {
                    gridSquare.style.backgroundColor = "#FFA2B9";
                }
            })
        const squareSize = 640 / size;
        gridSquare.style.width = squareSize + "px";
        gridSquare.style.height = squareSize + "px";
    }
}

document.addEventListener("mouseup", () => 
    {
        isMouseDown = false;
    });

btn.addEventListener("click", () => {
    const size = slider.value;
    gridContainer.innerHTML = "";
    createGrid(size);
})