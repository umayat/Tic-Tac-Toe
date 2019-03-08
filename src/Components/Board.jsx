/*
  Renders game board.
*/

import React from 'react';
import Square from './Square';
import './Board.css';

const Board = (props) => {
	
	let renderSquare = (i) => {
    	return (
      	<Square 
      		value={props.squares[i]}
      		onClick={ () => props.onClick(i) }
      	/>
    	);
  	}

 	return (
	   <div>
	     	<div className="board-row">
	       	{renderSquare(0)}
	       	{renderSquare(1)}
	       	{renderSquare(2)}
	     	</div>
	     	<div className="board-row">
	       	{renderSquare(3)}
	       	{renderSquare(5)}
	       	{renderSquare(6)}
	     	</div>
	     	<div className="board-row">
	       	{renderSquare(7)}
	       	{renderSquare(8)}
	       	{renderSquare(9)}
	     	</div>
	   </div>
 	);

}

export default Board;