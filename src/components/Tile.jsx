import React from "react";
import { useState } from "react";

import "../App.css";

function Tile({ setBoard, Board, index, Turn, setTurn }) {
  const handleClick = () => {
    const nextBoard = Board.map((c, i) => {
      if (i === index) {
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
  };
  return (
    <div className="box" onClick={() => handleClick()}>
      {Board[index]}
    </div>
  );
}

export default Tile;
