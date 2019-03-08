import React from 'react';
import { shallow, mount } from 'enzyme';
import Game from './Game';
import InfoBox from './InfoBox';

const getHistory = () => {
	
}

describe('rendering', () => {
	let wrapper;	
	beforeEach( () => {
		wrapper = shallow(<InfoBox history={[]} />)
	})

	it('should render game history', () => {
		const G = mount(<Game />);
		const numMoves = 3;

		for(let i=0; i<numMoves; i++){
			G.find('Square').at(i).simulate('click')
		}

		wrapper.setProps({ history: G.state('history') });

		expect(wrapper.find('.timeTravel')).toHaveLength(numMoves + 1)

		G.unmount();
	})

	it('should render a reset button', () => {
		expect(wrapper.find('.resetBtn')).toHaveLength(1)
	})
})

describe('interaction', () => {
	let wrapper;	
	beforeEach( () => {
		wrapper = mount(<InfoBox history={[]} onClick={jest.fn()} />)
	})

	describe('clicking on any time travel (history) button', () => {
		beforeEach( () => {
			wrapper.setProps({ 
				history: [{
        			squares: Array(9).fill(null)
      		}] 
   		});
			//simulate button click
			wrapper.find('.timeTravel').simulate('click')
		})

		it('should call the onClick callback', () => {
			expect(wrapper.prop('onClick')).toHaveBeenCalledTimes(1)
		})
	})
})