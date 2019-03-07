import React from 'react';
import { shallow } from 'enzyme';
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