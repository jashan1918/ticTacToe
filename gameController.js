import player from "./player.js"
import GameBoard from "./gameBoard.js";

const GameController = () => {

    const player1 = player("jashan" , "X");
    const player2 = player("duck", "O")
 
    console.log(player1);
    console.log(player2);

    console.log("GAME START!!!");

    currentPlayer = player1;

    const playMove = (index) => {

        if(GameBoard.getBoard()[index] !== "") return;

        GameBoard.updateBoard(index,currentPlayer.marker)


        if(currentPlayer === player1) {
            currentPlayer = player2;
        } else{
            currentPlayer = player1
        }
    } 


}

GameController();