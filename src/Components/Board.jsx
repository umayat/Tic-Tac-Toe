/*
  Renders game board.
*/

import React from 'react';
import Square from './Square';

const Board = () => {
	
	let renderSquare = () => {
    	return (
      	<Square />
    	);
  	}

 	return (
	   <div>
	     	<div className="board-row">
	       	{renderSquare()}
	       	{renderSquare()}
	       	{renderSquare()}
	     	</div>
	     	<div className="board-row">
	       	{renderSquare()}
	       	{renderSquare()}
	       	{renderSquare()}
	     	</div>
	     	<div className="board-row">
	       	{renderSquare()}
	       	{renderSquare()}
	       	{renderSquare()}
	     	</div>
	   </div>
 	);

}

export default Board;