import React from "react";
import { shallow } from 'enzyme';
import NotificationItem from "./NotificationItem";

describe('Tests the NotificationItem component', () => {
    it('Tests that NotificationItem renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toBe(true);
    });
    it('Tests that by passing dummy type and value props, it renders the correct html', () => {
        const wrapper = shallow(<NotificationItem type='default' value='test' />);
        const li = wrapper.find('li');
        expect(li).toHaveLength(1);
        expect(li.text()).toEqual('test');
        expect(li.prop('data-notification-type')).toEqual('default');
    });
    it('Tests that by passing a dummy html prop, it renders the correct html', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>);
        const li = wrapper.find('li');
        expect(li).toHaveLength(1);
    });
    it('Tests that when simulating a click on the component, the spy is called with the right ID argument', () => {
        const id = 1;
        const markAsRead = jest.fn();
        const wrapper = shallow(<NotificationItem id={id} type='default' markAsRead={markAsRead} />);
        wrapper.find('li').simulate('click');
        expect(markAsRead).toHaveBeenCalledWith(id);
    });
});
