import React from 'react';

// CSS
import './board.css';

// Components
import Cube from '../Cube/cube';

function Board({ board, handleMove }) {

    // Arrays to represent the rows and columns of the board
    const boardY = [1, 2, 3];
    const boardX = ["a", "b", "c"];

    return (
        <div className='board-wrapper'>
            {boardY.map((column, yIndex) => (
                <div key={yIndex} className='board-row-wrapper'>
                    {boardX.map((row, xIndex) => {
                        const pos = `${row}${column}`;
                        const symbol = board[pos];

                        return (
                            <div key={pos}>
                                <Cube pos={pos} symbol={symbol} handleMove={handleMove} />
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

export default Board;
