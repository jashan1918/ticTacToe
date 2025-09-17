import player from "./player.js"
import GameBoard from "./gameBoard.js";

const GameController = () => {

    const player1 = player("jashan" , "X");
    const player2 = player("duck", "O")
 
    console.log(player1);
    console.log(player2);

    console.log("GAME START!!!");

    let currentPlayer = player1;

    const playMove = (index) => {

            
            console.log(currentPlayer);

        if(GameBoard.getBoard()[index] !== "") return;

        GameBoard.updateBoard(index,currentPlayer.marker)

        console.log(GameBoard.getBoard());

        //checking for the win
        const winningCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        const board = GameBoard.getBoard(); 
        for (const [a, b, c] of winningCombinations) {
        if (board[a] === board[b] && board[b] === board[c] && board[a] !== "") {
        console.log(currentPlayer)
        console.log("wins")
        return;
  }
}


        const isBoardFull = GameBoard.getBoard().every(cell => cell !== "");

        if(isBoardFull) {
            console.log("It's a draw")
        }

        if(currentPlayer === player1) {
            currentPlayer = player2;
        } else{
            currentPlayer = player1
        }
    } 
return{
    playMove
}

}

const controller = GameController();

controller.playMove(0)
controller.playMove(5)
controller.playMove(1)
controller.playMove(7)
controller.playMove(2)