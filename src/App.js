import { useState } from 'react';

function Square({ value, onSquareClick, isHighlight }) {
  return (
    <button
      className={`square ${isHighlight ? 'highlight' : ''}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }

    onPlay(nextSquares, i);
  }

  const winInfo = calculateWinner(squares);
  let status;
  if (winInfo) {
    if (winInfo.winner === 'draw') {
      status = '무승부입니다!';
    } else {
      status = 'Winner: ' + winInfo.winner;
    }
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      {[0, 1, 2].map((row) => {
        return (
          <div className="board-row" key={row}>
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              const isHighlight = winInfo?.line?.includes(index);
              return (
                <Square
                  key={index}
                  value={squares[index]}
                  onSquareClick={() => handleClick(index)}
                  isHighlight={isHighlight}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
      position: null,
    },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;

  function handlePlay(nextSquares, index) {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      {
        squares: nextSquares,
        position: {
          row: Math.floor(index / 3) + 1,
          col: (index % 3) + 1,
        },
      },
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((step, move) => {
    let description;
    if (move > 0) {
      if (move === currentMove) {
        description = `당신은 ${move + 1}번째 순서에 있습니다.`;
      } else {
        const { row, col } = step.position;
        description = `Move #${move} (${row}, ${col})`;
      }
    } else {
      description = 'Go to game start!';
    }
    return (
      <li key={move}>
        {move === currentMove ? (
          <span>{description}</span>
        ) : (
          <button onClick={() => jumpTo(move)}>{description}</button>
        )}
      </li>
    );
  });

  const toggleOrder = () => {
    setIsAscending(!isAscending);
  };

  let sortedMoves = !isAscending ? [...moves].reverse() : moves;

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={toggleOrder}>
          {isAscending ? '내림차순으로 정렬' : '오름차순으로 정렬'}
        </button>
        <ol>{sortedMoves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line: lines[i],
      };
    }
  }

  if (squares.every((square) => square !== null)) {
    return {
      winner: 'draw',
      line: null,
    };
  }

  return null;
}
