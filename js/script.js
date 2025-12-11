const container = document.querySelector("#container");

for (i = 1; i <= 256; i++) {
    const newCell = document.createElement("div");
    const dimension = "20";
    newCell.style.width = `${dimension}px`;
    newCell.style.height = `${dimension}px`;
    newCell.style.border = "solid 2px red";
    container.appendChild(newCell);
}