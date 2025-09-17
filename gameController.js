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

        const isBoardFull = GameBoard.getBoard().every(cell => cell !== "");

        if(isBoardFull) {
            console.log("The game has finished!")
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
controller.playMove(1)
controller.playMove(2)
controller.playMove(3)
controller.playMove(4)
controller.playMove(5)
controller.playMove(6)
controller.playMove(7)
controller.playMove(8)
