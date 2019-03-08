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

	   squares[i] = this.state.next;

		this.setState({
			history: history.concat([ {squares: squares} ]),  // Could use Array.push(), but original array will be mutated.
      	next: (this.state.next === 'X') ? 'O' : 'X',
      	stepNumber: history.length
		})
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