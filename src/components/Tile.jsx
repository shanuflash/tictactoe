import React from "react";
import "../App.css";

function Tile({ Board, setBoard, Turn, setTurn, Winner, index }) {
  const handleClick = () => {
    if (!Winner) {
      const nextBoard = Board.map((c, i) => {
        if (i === index) {
          return Turn;
        } else {
          return c;
        }
      });
      setBoard(nextBoard);
      setTurn(Turn === "X" ? "O" : "X");
    }
  };
  return (
    <div className={`box ${Board[index]}`} onClick={() => handleClick()}>
      {Board[index]}
    </div>
  );
}

export default Tile;
