const GameBoard = (() => {

        const board = ["", "", "", "", "", "", "", "", ""] 
        
        function updateBoard(index, marker){
        board[index] = marker;

}


        const getBoard = () => board;

        return{
            updateBoard,
            getBoard
        }
})();

GameBoard.updateBoard(5, "X");
GameBoard.updateBoard(6, "O");
GameBoard.updateBoard(4, "X");
GameBoard.updateBoard(0, "O");
GameBoard.updateBoard(3, "X");
GameBoard.updateBoard(1, "O");
GameBoard.updateBoard(2, "X");
GameBoard.updateBoard(7, "O");
GameBoard.updateBoard(8, "X");


console.log(GameBoard.getBoard());