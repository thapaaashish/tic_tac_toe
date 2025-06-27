import React, { useState, useEffect } from 'react';
import GameGrid from './components/GameGrid';
import GameStatus from './components/GameStatus';
import ScoreBoard from './components/ScoreBoard';
import GameControls from './components/GameControls';
import MoveHistory from './components/MoveHistory';
import GameOverModal from './components/GameOverModal';

const GameBoard = () => {
  // Game state
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'draw'
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);
  const [moves, setMoves] = useState([]);
  const [showModal, setShowModal] = useState(false);
  
  // Score state with localStorage persistence
  const [scores, setScores] = useState(() => {
    const savedScores = localStorage.getItem('ticTacToeScores');
    return savedScores ? JSON.parse(savedScores) : { X: 0, O: 0, draws: 0 };
  });

  // Winning combinations
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  // Check for winner
  const checkWinner = (currentBoard) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return { winner: currentBoard[a], winningCells: combination };
      }
    }
    return null;
  };

  // Check for draw
  const checkDraw = (currentBoard) => {
    return currentBoard.every(cell => cell !== null);
  };

  // Handle cell click
  const handleCellClick = (index) => {
    if (board[index] || gameStatus !== 'playing') return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    // Add move to history
    const newMove = {
      player: currentPlayer,
      position: index,
      moveNumber: moves.length + 1
    };
    setMoves(prev => [...prev, newMove]);

    // Check for winner
    const winResult = checkWinner(newBoard);
    if (winResult) {
      setGameStatus('won');
      setWinner(winResult.winner);
      setWinningCells(winResult.winningCells);
      setScores(prev => {
        const newScores = { ...prev, [winResult.winner]: prev[winResult.winner] + 1 };
        localStorage.setItem('ticTacToeScores', JSON.stringify(newScores));
        return newScores;
      });
      setTimeout(() => setShowModal(true), 500);
      return;
    }

    // Check for draw
    if (checkDraw(newBoard)) {
      setGameStatus('draw');
      setScores(prev => {
        const newScores = { ...prev, draws: prev.draws + 1 };
        localStorage.setItem('ticTacToeScores', JSON.stringify(newScores));
        return newScores;
      });
      setTimeout(() => setShowModal(true), 500);
      return;
    }

    // Switch player
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  // Start new game
  const handleNewGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setGameStatus('playing');
    setWinner(null);
    setWinningCells([]);
    setMoves([]);
    setShowModal(false);
  };

  // Reset scores
  const handleResetScore = () => {
    const resetScores = { X: 0, O: 0, draws: 0 };
    setScores(resetScores);
    localStorage.setItem('ticTacToeScores', JSON.stringify(resetScores));
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const isDraw = gameStatus === 'draw';

  return (
    <div className="min-h-screen bg-background py-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Game Status */}
        <div className="mb-6">
          <GameStatus 
            currentPlayer={currentPlayer}
            gameStatus={gameStatus}
            winner={winner}
            isDraw={isDraw}
          />
        </div>

        {/* Main Game Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Score Board (Desktop) / Top (Mobile) */}
          <div className="lg:order-1 order-2">
            <ScoreBoard scores={scores} />
          </div>

          {/* Center Column - Game Grid and Controls */}
          <div className="lg:order-2 order-1 space-y-6">
            <GameGrid 
              board={board}
              onCellClick={handleCellClick}
              winningCells={winningCells}
              gameStatus={gameStatus}
            />
            
            <GameControls 
              onNewGame={handleNewGame}
              onResetScore={handleResetScore}
              gameStatus={gameStatus}
            />
          </div>

          {/* Right Column - Move History */}
          <div className="lg:order-3 order-3">
            <MoveHistory moves={moves} />
          </div>
        </div>

        {/* Game Over Modal */}
        <GameOverModal 
          isOpen={showModal}
          winner={winner}
          isDraw={isDraw}
          onNewGame={handleNewGame}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default GameBoard;