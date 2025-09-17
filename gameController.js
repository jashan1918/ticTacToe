import player from "./player.js"

const GameController = () => {

    const player1 = player("jashan" , "X");
    const player2 = player("duck", "O")
 
    console.log(player1);
    console.log(player2);
}

GameController();