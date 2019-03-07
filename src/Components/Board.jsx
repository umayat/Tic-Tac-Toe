/*
  Renders game board.
*/

import React from 'react';
import Square from './Square';

const Board = (props) => {
	const rowStart = [1, 4, 7];
	const colStart = [0, 1, 2];

	const rows = rowStart.map( (col, i) => {
		const cols = colStart.map( (row, j) => {
			return(
				<Square 
					key={j+i}
					value={props.value}
					onClick={props.onClick}
				/>
			)
		})

		return(
			<div className="board-row" key={i}>{cols}</div>
		)
	})

	return(
		<div>
			{rows}
		</div>
	)
}

export default Board;