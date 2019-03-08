/*
  Renders game and handles app(game) state.
*/

import React from 'react';
import Board from './Board';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null)
		}
	}

	handleClick(i) {
		const squares = this.state.squares.slice();
		squares[i] = 'X'

		this.setState({
			squares: squares
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