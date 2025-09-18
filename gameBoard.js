const GameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];

  function updateBoard(index, marker) {
    board[index] = marker;
  }

  const getBoard = () => board;

  return {
    updateBoard,
    getBoard,
  };
})();

export default GameBoard;
