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
})