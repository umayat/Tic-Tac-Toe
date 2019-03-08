import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

/*
	Rendering Tests
*/
describe('rendering', () => {
	let wrapper;
	
	beforeEach( () => {
		wrapper = shallow(<App />);
	})

	it('should render <Game />', () => {
		expect(wrapper.find('Game')).toHaveLength(1);
	})
})