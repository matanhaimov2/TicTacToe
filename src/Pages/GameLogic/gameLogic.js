import React, { useEffect, useState } from 'react';

// Components
import Board from '../../Components/Board/board';

// React Icons
import { MdClear } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";

function GameLogic() {

    // States
    const [turn, setTurn] = useState(true); // True means X is playing.
    const [board, setBoard] = useState({
        a1: '', a2: '', a3: '',
        b1: '', b2: '', b3: '',
        c1: '', c2: '', c3: ''
    });

    const startPlay = (pos) => {
        // Check if the clicked cell is empty
        if (board[pos] === '') {
            // Create a new board state with the updated cell
            const newBoard = { ...board, [pos]: turn ? 'X' : 'O' };
            setBoard(newBoard);
            setTurn(!turn);
        }
    }

    useEffect(() => {
        // logic here - check if Win/Tie occured
        console.log(board)
    }, [board])

    return (
        <div className='tictactoe-wrapper'>
            {/* Update the board after each turn */}
            <h1>Tic Tac Toe</h1>

            {turn ? (
                <span className='tictactoe-play-wrapper'> <MdClear /> - Is Playing</span>
            ) : (
                <span className='tictactoe-play-wrapper'> <FaRegCircle /> - Is Playing</span>
            )}

            <Board board={board} handleMove={startPlay} />

        </div>
    );
}

export default GameLogic;