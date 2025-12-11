const container = document.querySelector("#container");

function createGrid () {
    if (!container.firstChild) {
        for (let i = 1; i <= 256; i++) {
            const newCell = document.createElement("div");
            newCell.classList.add("cell");
            const dimension = "20";
            newCell.style.width = `${dimension}px`;
            newCell.style.height = `${dimension}px`;
            newCell.style.border = "solid 2px red";
            container.appendChild(newCell);
        }
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

creator.addEventListener("click", () => {
    createGrid();
})

remover.addEventListener("click", () => {
    removeGrid();
})

