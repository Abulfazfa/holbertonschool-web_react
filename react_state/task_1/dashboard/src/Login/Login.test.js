import React from 'react';
import { shallow } from 'enzyme';
import Login from "./Login";

describe('Tests the Login component', () => {
    it('Tests that Login renders without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toBe(true);
    });
    it('Tests that the component renders 3 input tags and 2 label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('label')).toHaveLength(2);
        expect(wrapper.find('input')).toHaveLength(3);
    });
    it('Tests that the submit button is disabled by default', () => {
        const wrapper = shallow(<Login />);
        const button = wrapper.find('input[type="submit"]');
        expect(button.props().disabled).toBe(true);
    });
    it('Tests that after changing the value of the two inputs, the button is enabled', () => {
        const wrapper = shallow(<Login />);
        const emailChangeEvent = { target: { value: 'hello@world.com' }}
        const passwordChangeEvent = { target: { value: 'test123!' }}

        const emailInput = wrapper.find('input[type="email"]');
        emailInput.simulate('change', emailChangeEvent);

        const passwordInput = wrapper.find('input[type="password"]');
        passwordInput.simulate('change', passwordChangeEvent);

        const button = wrapper.find('input[type="submit"]');
        expect(button.props().disabled).toBe(false);
    });
});
