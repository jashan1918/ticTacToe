
import displayController from './displayController.js';


displayController();


// main.js
import GameController from "./gameController.js";

document.addEventListener("DOMContentLoaded", () => {
  const controller = GameController();

  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.index);
      const result = controller.playMove(index);

      // Optional: handle win/draw message
      if (result?.success) {
        // maybe show a message like:
        // document.querySelector("#status").textContent = `${result.marker} played`;
      }
    });
  });
});
