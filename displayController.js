const displayController = () => {

console.log("the display controller is working!!")

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        const index = parseInt(e.target.dataset.index)
        
    })
})
}

export default displayController;