/*
  Renders user console for viewing game info.
*/

import React from 'react';

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
   	<ol>{moves}</ol>
   )
}

export default InfoBox;