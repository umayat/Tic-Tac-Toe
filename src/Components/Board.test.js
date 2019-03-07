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