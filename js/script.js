const container = document.querySelector("#container");

function createGrid (dim) {
    removeGrid();
    for (let i = 1; i <= dim ** 2; i++) {
        const dimpx = 960 / dim;
        const newCell = document.createElement("div");
        newCell.classList.add("cell");
        newCell.style.width = `${dimpx}px`;
        newCell.style.height = `${dimpx}px`;
        newCell.style.border = "solid 2px lightblue";
        container.appendChild(newCell);
    }
}

function removeGrid () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Event Listener for painting the cells in random color && hoverEffect.checked
const hoverEffect = document.querySelector("#hoverEffect");
const randomColor = document.querySelector("#randomColor");
const darkening = document.querySelector("#darkeningEffect");

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("cell") && hoverEffect.checked) {

// randomColor.checked
        let hoverColor;        
        if (randomColor.checked) {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            hoverColor = "rgb("+r+", "+g+", "+b+")";
        } else {
            hoverColor = "rgb(150, 150, 150)";        
        }

// darkening.checked
        if (e.target.style.opacity === "" && darkening.checked) {
            e.target.style.opacity = 0.1;
        } else if (e.target.style.opacity != 1 && darkening.checked) {
            e.target.style.opacity = (parseFloat(e.target.style.opacity) + 0.1);
        }

        e.target.style.backgroundColor = `${hoverColor}`;
    }
})

// Remove grid button
const remover = document.querySelector("#removeGridButton")
const currentDimensions = document.querySelector("#currentDimensions");

remover.addEventListener("click", (e) => {
    e.preventDefault();
    removeGrid();
    currentDimensions.textContent = "Current grid removed.";
})

// Create grid button
const creator = document.querySelector("#createGridButton");

creator.addEventListener("click", (e) => {
    e.preventDefault();
    const dimensions = document.querySelector("#dimensions");
    const dimValue = parseInt(dimensions.value);
    if (dimValue < 100 && dimValue > 0) {
        createGrid(dimValue);
        currentDimensions.textContent = `Current grid created with ${dimValue} dimensions.`;
    } else {
        currentDimensions.textContent = "Please insert a number between 0 and 100.";
    }
})