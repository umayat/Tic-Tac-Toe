import React from 'react';
import { shallow } from 'enzyme';
import Square from './Square';

//generate random player icon: 'X' or 'O'
const getPlayerIcon = () => {
	let rand = Math.floor((Math.random() * 2));	//random number 0 or 1
	let playerIcon;

	//randomly assign user symbol
	rand === 0 ? playerIcon = 'X' : playerIcon = 'O';

	return playerIcon;
}

describe('rendering', () => {
	let playerIcon = getPlayerIcon();
	let wrapper;
	
	beforeEach( () => {
		wrapper = shallow(<Square value={playerIcon} />)
	})

	it('should render a button', () => {
		expect(wrapper.find('button')).toHaveLength(1)
	})

	it('should render player icon', () => {
		expect(wrapper.find('button').contains(playerIcon)).toBe(true)
	})
})

describe('interaction', () => {
	let playerIcon = getPlayerIcon();
	let wrapper;
	
	beforeEach( () => {
		wrapper = shallow(<Square value={playerIcon} onClick={jest.fn()} />)
	})

	describe('clicking the button', () => {
		beforeEach( () => {
			//simulate button click
			wrapper.find('button').prop('onClick')()
		})
		it('should call the onClick callback', () => {
			expect(wrapper.find('button').prop('onClick')).toHaveBeenCalledTimes(1)
		})
	})
})