import { useState, useEffect } from "react";
import Tile from "./components/Tile";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  const [Winner, setWinner] = useState(null);
  const [Turn, setTurn] = useState("X");
  const [Board, setBoard] = useState(Array(9).fill(null));

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
    if (!Board.some((element) => element === null)) {
      if (!Winner) setWinner("DRAW");
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setTurn("X");
    setWinner(null);
  };

  useEffect(() => {
    handleWinner();
  }, [Board]);

  return (
    <div className="App">
      <div className="container">
        <div className="head">
          <div className="title">Tic Tac Toe</div>
          <div className="desc">{Turn}'s Turn</div>
        </div>
        <div className="board">
          <div className="row">
            <Tile {...{ Board, setBoard, Turn, setTurn, Winner }} index={0} />
            <Tile {...{ Board, setBoard, Turn, setTurn, Winner }} index={1} />
            <Tile {...{ Board, setBoard, Turn, setTurn, Winner }} index={2} />
          </div>
          <div className="row">
            <Tile {...{ Board, setBoard, Turn, setTurn, Winner }} index={3} />
            <Tile {...{ Board, setBoard, Turn, setTurn, Winner }} index={4} />
            <Tile {...{ Board, setBoard, Turn, setTurn, Winner }} index={5} />
          </div>
          <div className="row">
            <Tile {...{ Board, setBoard, Turn, setTurn, Winner }} index={6} />
            <Tile {...{ Board, setBoard, Turn, setTurn, Winner }} index={7} />
            <Tile {...{ Board, setBoard, Turn, setTurn, Winner }} index={8} />
          </div>
        </div>
        <div className="result-container">
          {Winner === "DRAW" ? (
            <div className="result">It's a {Winner}!</div>
          ) : (
            Winner !== null && (
              <div className="result">
                {Winner} is the winner!
                <Confetti width={window.innerWidth} height={window.innerHeight} />
              </div>
            )
          )}
          <button className="reset" onClick={handleReset}>
            {Winner === null ? "Reset" : "New Game"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
