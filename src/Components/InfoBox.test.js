import React from 'react';
import { shallow, mount } from 'enzyme';
import Game from './Game';
import InfoBox from './InfoBox';

const stimulatePlayerMoves = (numMoves) => {
	const G = mount(<Game />);
	let mockHistory;

	for(let i=0; i<numMoves; i++){
		G.find('Square').at(i).simulate('click')
	}

	mockHistory = G.state('history');
	G.unmount();

	return mockHistory
}

describe('rendering', () => {
	let wrapper;	
	beforeEach( () => {
		wrapper = shallow(<InfoBox history={[]} />)
	})

	it('should render game history', () => {
		const numMoves = 3;
		const mockHistory = stimulatePlayerMoves(numMoves);
		
		wrapper.setProps({ history: mockHistory });

		expect(wrapper.find('.timeTravel')).toHaveLength(numMoves + 1)
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