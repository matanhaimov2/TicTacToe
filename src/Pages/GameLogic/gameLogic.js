import React, { useEffect, useState, useContext } from 'react';
import Swal from 'sweetalert2'

// CSS
import './gameLogic.css';

// React MUI
import FormControlLabel from '@mui/material/FormControlLabel';

// React Icons
import { MdClear } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";

// Components
import Board from '../../Components/Board/board';
import { DarkContext } from '../../Components/DarkContext';
import MaterialUISwitch from '../../Components/MaterialUISwitch';

function GameLogic() {

    // States
    const [turn, setTurn] = useState(true); // True means X is playing.
    const [board, setBoard] = useState({
        a1: '', a2: '', a3: '',
        b1: '', b2: '', b3: '',
        c1: '', c2: '', c3: ''
    });
    const [movesCount, setMovesCount] = useState(0); // Keep track of moves count
    const [xCountWining, setXCountWining] = useState(0);
    const [oCountWining, setOCountWining] = useState(0);

    // Toggle dark/light mode
    const { toggleDarkMode, toggleDarkTheme } = useContext(DarkContext);

    const startPlay = (pos) => {
        // Check if the clicked cell is empty
        if (board[pos] === '') {
            // Create a new board state with the updated cell
            const newBoard = { ...board, [pos]: turn ? 'X' : 'O' };
            setBoard(newBoard);
            setTurn(!turn);
            setMovesCount(prevCount => prevCount + 1); // Increment the moves count
        }
    }

    const checkWin = (symbol) => {
        const winningCombinations = [
            // Rows
            ['a1', 'a2', 'a3'],
            ['b1', 'b2', 'b3'],
            ['c1', 'c2', 'c3'],
            // Columns
            ['a1', 'b1', 'c1'],
            ['a2', 'b2', 'c2'],
            ['a3', 'b3', 'c3'],
            // Diagonals
            ['a1', 'b2', 'c3'],
            ['a3', 'b2', 'c1']
        ];

        // Loop through each winning combination
        for (let combination of winningCombinations) {
            // Check if every cell in the combination has the specified symbol (X or O)
            if (combination.every(cell => board[cell] === symbol)) {
                return true;
            }
        }

        return false;
    }

    // Reset game
    const resetGame = () => {
        setTurn(true)
        setBoard({
            a1: '', a2: '', a3: '',
            b1: '', b2: '', b3: '',
            c1: '', c2: '', c3: ''
        })
        setMovesCount(0)
    }

    // Reset score of both x and o players
    const resetScore = () => {
        setXCountWining(0)
        setOCountWining(0)
    }

    // Show result message
    const resultMessage = (symbol) => {
        Swal.fire({
            title: `<span style="color: ${toggleDarkMode ? '#ffffff' : '#000000'}">${symbol === "tie" ? "TIE" : `${symbol} HAS WON THE GAME`}</span>`,
            html: `<span style="color: ${toggleDarkMode ? '#ffffff' : '#000000'}">Rematch?</span>`,
            background: toggleDarkMode ? "#121212" : "#ffffff",
            focusConfirm: false,
            confirmButtonText: `<i class="fa fa-thumbs-up"></i> Lets Go`,
        }).then((result) => {
            if (result.isConfirmed) {
                resetGame();
            }
        });
    }

    useEffect(() => {
        // X - won
        if (checkWin('X')) {
            resultMessage('X')
            setXCountWining(prevCount => prevCount + 1)
        }
        // O - won
        else if (checkWin('O')) {
            resultMessage('O')
            setOCountWining(prevCount => prevCount + 1)
        }
        // TIE
        else if (movesCount === 9) resultMessage('tie')

    }, [board, movesCount]);

    return (
        <div className='tictactoe-wrapper'>
            <h1>Tic Tac Toe</h1>

            <div className='tictactoe-info-wrapper'>
                {turn ? (
                    <span className='tictactoe-who-play'> <MdClear /> &nbsp;- Is Playing</span>
                ) : (
                    <span className='tictactoe-who-play'> <FaRegCircle /> &nbsp;- Is Playing</span>
                )}

                <span className="tictactoe-score"> Score {xCountWining} : {oCountWining}</span>

                <div className='tictactoe-reset-wrapper'>
                    <button className='tictactoe-reset-button' onClick={resetGame}> Reset Game </button>
                    <button className='tictactoe-reset-button' onClick={resetScore}> Reset Score </button>
                </div>
            </div>

            <Board board={board} handleMove={startPlay} />

            <FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />} onClick={toggleDarkTheme} />
        </div>
    );
}

export default GameLogic;
