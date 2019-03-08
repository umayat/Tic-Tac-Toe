/*
  Renders game and handles app(game) state.
*/

import React from 'react';
import Board from './Board';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [],
			squares: Array(9).fill(null),
			next: 'X'
		}
	}

	handleClick(i) {
		const squares = this.state.squares.slice();
		squares[i] = this.state.next;

		this.setState({
			squares: squares,
			next: (this.state.next === 'X') ? 'O' : 'X'
		})
	}

	render() {
		return (
			<Board 
				squares={this.state.squares} 
				onClick={ (i) => this.handleClick(i) } 
			/>
		)
	} 
}

export default Game;