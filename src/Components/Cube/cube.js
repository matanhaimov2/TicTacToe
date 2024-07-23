import React, { Component } from 'react';

import './cube.css';

// React Icons
import { MdClear } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";

class Cube extends Component {
    render() {
        const { pos, symbol } = this.props;

        return (
            <div className="cube" id={pos} key={pos} pos={pos} onClick={() => this.props.handleMove(pos)}>
                <span> {pos} </span>

                {symbol && (
                    <div className={`cube-${symbol === "X" ? "x" : "o"}-symbol-wrapper`}>
                        {symbol === "X" ? (
                            <MdClear className='cube-symbol' />
                        ) : (
                            <FaRegCircle className='cube-symbol' />
                        )}
                    </div>
                )}
            </div>
        );
    }
};

export default Cube;
