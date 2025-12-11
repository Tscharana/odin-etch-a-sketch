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

const creator = document.querySelector("#createGridButton");
const remover = document.querySelector("#removeGridButton");

creator.addEventListener("click", (e) => {
    e.preventDefault();
    createGrid(16);
})

remover.addEventListener("click", (e) => {
    e.preventDefault();
    removeGrid();
})

const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const dimensions = document.querySelector("#dimensions");
    removeGrid();
    createGrid(dimensions.value);
})