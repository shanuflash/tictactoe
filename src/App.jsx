import { useState, useEffect, useRef } from "react";
import Tile from "./components/Tile";
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
      setWinner("DRAW");
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

  const blobRef = useRef(null);

  window.onpointermove = (event) => {
    const { clientX, clientY } = event;
    blobRef.current.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
    // blobRef.current.style.left = `${clientX}px`;
    // blobRef.current.style.top = `${clientY}px`;
  };

  return (
    <div className="App">
      <div ref={blobRef} id="blob"></div>
      <div className="container">
        <div className="head">
          <div className="title" onClick={() => test("title")}>
            Tic Tac Toe
          </div>
          <div className="desc">{Turn}'s Turn</div>
        </div>
        <div className="board">
          <div className="row 1">
            <Tile {...{ Board, setBoard, Turn, setTurn, Winner }} index={0} />
            <Tile {...{ Board, setBoard, Turn, setTurn, Winner }} index={1} />
            <Tile {...{ Board, setBoard, Turn, setTurn, Winner }} index={2} />
          </div>
          <div className="row 2">
            <Tile {...{ Board, setBoard, Turn, setTurn, Winner }} index={3} />
            <Tile {...{ Board, setBoard, Turn, setTurn, Winner }} index={4} />
            <Tile {...{ Board, setBoard, Turn, setTurn, Winner }} index={5} />
          </div>
          <div className="row 3">
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
              <div className="result">{Winner} is the winner!</div>
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
