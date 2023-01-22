import React from "react";
import "../App.css";

function Tile({ Board, setBoard, Turn, setTurn, Winner, index }) {
  const handleClick = () => {
    if (!Winner) {
      const nextBoard = Board.map((c, i) => {
        if (i === index && c === null) {
          if (Turn === "X") {
            setTurn("O");
            return "X";
          } else {
            setTurn("X");
            return "O";
          }
        } else {
          return c;
        }
      });
      setBoard(nextBoard);
    }
  };
  return (
    <div className="box" onClick={() => handleClick()}>
      {Board[index]}
    </div>
  );
}

export default Tile;
