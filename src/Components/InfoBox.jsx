/*
  Renders user console for viewing game info.
*/

import React from 'react';
import './InfoBox.css';

const InfoBox = (props) => {
	const moves = props.history.map( (step, moveIndex) => {
      const desc = moveIndex ? 'Go to move #' + moveIndex : 'Go to game start';
      return (
        	<li key={moveIndex}>
         	<button className="timeTravel"><span>{desc}</span></button>
        	</li>
      )
   })

   return (
   	<center>
	   	<ol>{moves}</ol>
	   	<button className="resetBtn">Reset Game</button>
	   </center>
   )
}

export default InfoBox;