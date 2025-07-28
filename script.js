const gridContainer = document.getElementById("grid-container");
const slider = document.getElementById("grid-slider");
const btn = document.getElementById("grid-size");
let isMouseDown = false;

function displayGridSize() {
    let gridSize = document.getElementById("grid-value");
    gridSize.textContent = slider.value
}

slider.addEventListener("input", displayGridSize)

function getRandomPastelColor() {
    const colors = [
        `rgb(${200 + Math.random() * 55}, ${180 + Math.random() * 75}, ${220 + Math.random() * 35})`, // pastel pink
        `rgb(${180 + Math.random() * 75}, ${200 + Math.random() * 55}, ${220 + Math.random() * 35})`, // pastel blue  
        `rgb(${200 + Math.random() * 55}, ${180 + Math.random() * 75}, ${220 + Math.random() * 35})`  // pastel purple
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridContainer.append(gridSquare);
    
        gridSquare.addEventListener("mousedown", () => 
            {
                isMouseDown = true;
                gridSquare.style.backgroundColor = getRandomPastelColor();
            })
        gridSquare.addEventListener("mouseenter", () => 
            {
                if (isMouseDown === true) {
                gridSquare.style.backgroundColor = getRandomPastelColor();
                }
            })
        const squareSize = 640 / size;
        gridSquare.style.width = squareSize + "px";
        gridSquare.style.height = squareSize + "px";
    }
}

createGrid(16);

document.addEventListener("mouseup", () => 
    {
        isMouseDown = false;
    });

btn.addEventListener("click", () => {
    const size = slider.value;
    gridContainer.innerHTML = "";
    createGrid(size);
})

// Make random color picker
function getRandomPastelColor() {
    const colors = [
        `rgb(${200 + Math.random() * 55}, ${180 + Math.random() * 75}, ${220 + Math.random() * 35})`, // pastel pink
        `rgb(${180 + Math.random() * 75}, ${200 + Math.random() * 55}, ${220 + Math.random() * 35})`, // pastel blue  
        `rgb(${200 + Math.random() * 55}, ${180 + Math.random() * 75}, ${220 + Math.random() * 35})`  // pastel purple
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}