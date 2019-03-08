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

	describe('clicking on <Board />', () => {
		beforeEach( () => {
			next = wrapper.state('next');
			//simulate button click
			wrapper.find('Square').at(0).simulate('click')
		})

		it('should render player symbol', () => {
			expect(wrapper.find('Square').at(0).contains('X')).toBe(true)
		})

		it('should update next player status', () => {
			expect(wrapper.state('next')).not.toEqual(next)
		})
	})
})