/*
	Renders individual square of game board.
*/

import React from 'react';

const Square = (props) => {
	return (
		<button>{props.value}</button>
	)
} 

export default Square;