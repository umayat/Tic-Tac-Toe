/*
  Renders game board.
*/

import React from 'react';
import Square from './Square';
import './Board.css';

const Board = (props) => {
	
	let renderSquare = () => {
    	return (
      	<Square onClick={ props.onClick }/>
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