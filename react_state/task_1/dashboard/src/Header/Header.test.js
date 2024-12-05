import React from 'react';
import { shallow } from 'enzyme';
import Header from "./Header";

describe('Tests the Header component', () => {
    it('Tests that Headers renders without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBe(true);
    });
    it('Tests that the component render img and h1 tags', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('h1')).toHaveLength(1);
        expect(wrapper.find('img')).toHaveLength(1);
    });
});
