
import displayController from './displayController.js';


displayController();


// main.js
import GameController from "./gameController.js";

document.addEventListener("DOMContentLoaded", () => {
  const controller = GameController();

  const cells = document.querySelectorAll(".cell");

  let isGameOver = false;
  cells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
        if(isGameOver) return
        
      const index = parseInt(e.target.dataset.index);
      const result = controller.playMove(index);

      // Optional: handle win/draw message
      if (result?.success) {
        // maybe show a message like:
        document.querySelector("#status").textContent = `${result.marker} played`;
      
        if(result.draw){
        document.querySelector("#result").textContent = "match is a draw!"
        isGameOver = true
        
        }
        if(result?.winner) {
            document.querySelector("#result").textContent = `${result.winner} Wins`
            isGameOver = true
        }
     
      }
      else {
        document.querySelector("#status").textContent = result.message
      }
    });
  });
});
