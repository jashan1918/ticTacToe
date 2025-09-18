import player from "./player.js";
import GameBoard from "./gameBoard.js";
import displayController from "./displayController.js";

const GameController = () => {
console.log("GAME CONTROLLER INIT"); // Put at the top


  const player1 = player("jashan", "X");
  const player2 = player("duck", "O");

  console.log(player1);
  console.log(player2);

  console.log("GAME START!!!");

  let currentPlayer = player1;
  let gameOver = false;
  const disController = displayController();

  const playMove = (index) => {
    console.log(currentPlayer);

    if (GameBoard.getBoard()[index] !== "")
      return { success: false, message: "Cell already taken" };

    GameBoard.updateBoard(index, currentPlayer.marker);
       disController.updateCell(index, currentPlayer.marker);


    console.log(GameBoard.getBoard());

    //checking for the win
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const board = GameBoard.getBoard();
    for (const [a, b, c] of winningCombinations) {
      if (board[a] === board[b] && board[b] === board[c] && board[a] !== "") {
        console.log(currentPlayer);
        console.log("wins");
        gameOver = true;
        return {
          success: true,
          winner: currentPlayer,
          index,
          marker: currentPlayer.marker,
        };
      }
    }

    const isBoardFull = GameBoard.getBoard().every((cell) => cell !== "");

    if (isBoardFull) {
      gameOver = true;
      return { success: true, draw: true, index, marker: currentPlayer.marker };
    }

    
 
    // Switch player
   const marker = currentPlayer.marker
   console.log(currentPlayer);
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    console.log(currentPlayer);

    return { success: true, index, marker };
  };
  return {
    playMove,
  };
};

// const controller = GameController();

// controller.playMove(0)
// controller.playMove(5)
// controller.playMove(1)
// controller.playMove(7)
// controller.playMove(2)

export default GameController;
