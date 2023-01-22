import { useState, useEffect } from "react";
import Tile from "./components/Tile";
import "./App.css";

function App() {
  const [Winner, setWinner] = useState(null);
  const [Turn, setTurn] = useState("X");
  const [Board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const condition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const handleWinner = () => {
    {
      condition.map((subArr) => {
        let [a, b, c] = subArr;
        if (
          Board[a] === Board[b] &&
          Board[b] === Board[c] &&
          Board[a] === Board[c] &&
          Board[a] !== null
        ) {
          setWinner(Board[a]);
        }
      });
    }
  };
  useEffect(() => {
    handleWinner();
  }, [Board]);

  return (
    <div className="App">
      <div className="container">
        <div className="title">Tic-Tac-Toe</div>
        <div className="board">
          <div className="row 1">
            <Tile {...{ setBoard, Board, Turn, setTurn }} index={0} />
            <Tile {...{ setBoard, Board, Turn, setTurn }} index={1} />
            <Tile {...{ setBoard, Board, Turn, setTurn }} index={2} />
          </div>
          <div className="row 2">
            <Tile {...{ setBoard, Board, Turn, setTurn }} index={3} />
            <Tile {...{ setBoard, Board, Turn, setTurn }} index={4} />
            <Tile {...{ setBoard, Board, Turn, setTurn }} index={5} />
          </div>
          <div className="row 3">
            <Tile {...{ setBoard, Board, Turn, setTurn }} index={6} />
            <Tile {...{ setBoard, Board, Turn, setTurn }} index={7} />
            <Tile {...{ setBoard, Board, Turn, setTurn }} index={8} />
          </div>
        </div>
        <div className="result">{Winner}</div>
      </div>
    </div>
  );
}

export default App;
