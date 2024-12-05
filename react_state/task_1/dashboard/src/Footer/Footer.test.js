import React from 'react';
import { shallow } from 'enzyme';
import Footer from "./Footer";

describe('Tests the Footer component', () => {
    it('Tests that Footer renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBe(true);
    });
    it('Tests that the component at the very least renders the text “Copyright”', () => {
        const wrapper = shallow(<Footer text='Copyright'/>);
        const p = wrapper.find('p');
        expect(p.text()).toBe(`Copyright`);
    });
});
