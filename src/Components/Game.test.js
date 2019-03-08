import React from 'react';
import { shallow, mount } from 'enzyme';
import Game from './Game';

describe('rendering', () => {
	let wrapper;	
	beforeEach( () => {
		wrapper = shallow(<Game />)
	})

	it('should render game board', () => {
		expect(wrapper.find('Board')).toHaveLength(1)
	})
})

describe('interaction', () => {
	let next;
	let wrapper;
	
	beforeEach( () => {
		wrapper = mount(<Game />)
	})
	afterEach( () => {
		wrapper.unmount();
	})

	describe('clicking on <Board />', () => {
		beforeEach( () => {
			next = wrapper.state('next');
			//simulate button click
			wrapper.find('Square').at(0).simulate('click')
		})

		it('should render player symbol', () => {
			expect(wrapper.find('Square').at(0).contains('X')).toBe(true)
		})

		it('should update next player status (allows taking turns)', () => {
			expect(wrapper.state('next')).not.toEqual(next)
		})

		it('should update history', () => {
			const mockHistory = [{
	        squares: Array(9).fill(null)
	      }]
			expect(wrapper.state('history')).toHaveLength(mockHistory.length + 1)
		})

		it('should check for winner', () => {
			const calculateWinner = jest.spyOn(wrapper.instance(), 'calculateWinner');
			wrapper.find('Square').at(0).simulate('click')
			expect(calculateWinner).toHaveBeenCalled()
		})
	})


	describe('clicking on any .timeTravel button', () => {
		it('should rewind game to chosen step', () => {
			const numMoves = 3;

			for(let i=0; i<numMoves; i++) {
				//simulate 3 moves taken by players
				wrapper.find('Square').at(i).simulate('click')
			}

			//simulate rewinding game to beginning (move 0)
			wrapper.find('.timeTravel').at(0).simulate('click')
			expect(wrapper.state('stepNumber')).toEqual(0)
		})
	})
})