/*
  Renders game and handles app(game) state.
*/

import React from 'react';
import Board from './Board';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [{
	        squares: Array(9).fill(null)
	      }],
			next: 'X',
			stepNumber: 0
		}
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
	   const current = history[history.length - 1];
	   const squares = current.squares.slice();  //shallow copy

	   // Ignore click if there is winner, or square is already filled
	   if(this.calculateWinner(squares) || squares[i]) {
	   	return;
	   }

	   squares[i] = this.state.next;

		this.setState({
			history: history.concat([ {squares: squares} ]),  // Could use Array.push(), but original array will be mutated.
      	next: (this.state.next === 'X') ? 'O' : 'X',
      	stepNumber: history.length
		})
	}

	/*
		Calculate if there is winner.
	*/
  	calculateWinner(squares) {
    	// Winning combinations
   	const lines = [
	      [0,1,2],
	      [3,4,5],
	      [6,7,8],
	      [0,3,6],
	      [1,4,7],
	      [2,5,8],
	      [0,4,8],
	      [2,4,6]
    	];

    	for(let i=0; i<lines.length; i++) {
      	const [a,b,c] = lines[i];

      	if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        		return squares[a];
      	}
    	}

    	return null;
  	}

	render() {
		const history = this.state.history;
    	const current = history[this.state.stepNumber];

		return (
			<Board 
				squares={current.squares} 
				onClick={ (i) => this.handleClick(i) } 
			/>
		)
	} 
}

export default Game;