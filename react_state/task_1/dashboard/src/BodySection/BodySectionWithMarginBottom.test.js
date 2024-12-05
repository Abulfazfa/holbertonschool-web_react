import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('Tests the BodySectionWithMarginBottom component', () => {
    it('Shallows the BodySectionWithMarginBottom component', () => {
        const wrapper = shallow(
            <BodySectionWithMarginBottom title="test title">
                <p>test children node</p>
            </BodySectionWithMarginBottom>
        );
        const bodySection = wrapper.find('BodySection');
        expect(bodySection).toHaveLength(1);
        expect(bodySection.props().title).toEqual('test title');
    });
});
