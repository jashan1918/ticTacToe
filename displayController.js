const displayController = () => {
  console.log("the display controller is working!!");

  const cells = document.querySelectorAll(".cell");

  function updateCell(index, marker) {
    const cell = document.querySelector(`[data-index="${index}"]`);
    cell.textContent = marker;
  }

  return {
    updateCell,
  };
};

export default displayController;
