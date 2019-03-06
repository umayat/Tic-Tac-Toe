import React from 'react';
import { shallow } from 'enzyme';
import Square from './Square';

describe('rendering', () => {
	let rand = Math.floor((Math.random() * 2));	//random number 0 or 1
	let playerIcon;
	let wrapper;
	
	//randomly assign user symbol
	rand === 0 ? playerIcon = 'X' : playerIcon = 'O';

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