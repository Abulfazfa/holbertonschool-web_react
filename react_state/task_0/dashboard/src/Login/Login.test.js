import React from 'react';
import { shallow } from 'enzyme';
import Login from "./Login";

describe('Tests the Login component', () => {
    it('Tests that Login renders without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toBe(true);
    });
    it('Tests that the component renders 2 input tags and 2 label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('label')).toHaveLength(2);
        expect(wrapper.find('input')).toHaveLength(2);
    });
});
