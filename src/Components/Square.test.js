import React from 'react';
import { shallow } from 'enzyme';
import Square from './Square';

describe('rendering', () => {
	let wrapper;
	beforeEach( () => {
		wrapper = shallow(<Square />)
	})

	it('should render a button', () => {
		expect(wrapper.find('button')).toHaveLength(1)
	})
})