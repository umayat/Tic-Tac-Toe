/*
	Renders individual square of game board.
*/

import React from 'react';
import './Square.css';

const Square = (props) => {
	return (
		<button className={"square " + props.colour} onClick={props.onClick}>
			{props.value}
		</button>
	)
} 

export default Square;