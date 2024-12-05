import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('Tests the BodySection component', () => {
    it('Tests that shallowing the component should render correctly the children and one h2 element', () => {
        const wrapper = shallow(
            <BodySection title="test title">
                <p>test children node</p>
            </BodySection>
        );
        const h = wrapper.find('h2');
        const p = wrapper.find('p');
        expect(h).toHaveLength(1);
        expect(p).toHaveLength(1);
        expect(p.text()).toEqual('test children node');
        expect(h.text()).toEqual('test title');
    });
});
