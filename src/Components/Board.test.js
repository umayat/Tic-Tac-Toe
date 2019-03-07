import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';

describe('rendering', () => {
	let wrapper;	
	beforeEach( () => {
		wrapper = shallow(<Board />)
	})

	it('should render 9 <Square /> components', () => {
		expect(wrapper.find('Square')).toHaveLength(9)
	})
})

describe('interaction', () => {
	let rand;
	let wrapper;
	
	beforeEach( () => {
		rand = Math.floor((Math.random() * 8));	//random number 0 and 8
		wrapper = shallow(<Board onClick={jest.fn()} />)
	})

	describe('clicking any <Square />', () => {
		beforeEach( () => {
			//simulate button click
			wrapper.find('Square').at(rand).prop('onClick')()
		})
		it('should call the onClick callback', () => {
			expect(wrapper.find('Square').at(rand).prop('onClick')).toHaveBeenCalledTimes(1)
		})
	})
})