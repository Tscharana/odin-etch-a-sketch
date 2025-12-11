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

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("cell")) {
        e.target.style.backgroundColor = "grey";
    }
})

const remover = document.querySelector("#removeGridButton")

remover.addEventListener("click", (e) => {
    e.preventDefault();
    removeGrid();
})

const creator = document.querySelector("#createGridButton");
const currentDimensions = document.querySelector("#currentDimensions");

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

