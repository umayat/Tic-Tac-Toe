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
         	<button className="timeTravel" onClick={ () => props.onClick(moveIndex) }><span>{desc}</span></button>
        	</li>
      )
   })

   return (
   	<center>
   		<h2 className="subHeading">Next Player</h2>
			<div className={"status " + props.colour}>{props.status}</div>
	   	<h2 className="subHeading">Game History</h2>
	   	<ol>{moves}</ol>
	   	<button className="resetBtn" onClick={props.onReset}>Reset Game</button>
	   </center>
   )
}

export default InfoBox;