import React from 'react';
import { shallow } from 'enzyme';
import App from "./App";

describe('Tests the App component', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<App />);
    });
    afterEach(() => {
        jest.restoreAllMocks();
    });
    it('Tests that App renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });
    it('should contain the Notifications component', () => {
        expect(wrapper.find('Notifications')).toHaveLength(1);
    });
    it('should contain the Header component', () => {
        expect(wrapper.find('Header')).toHaveLength(1);
    });
    it('should contain the Login component', () => {
        expect(wrapper.find('Login')).toHaveLength(1);
    });
    it('should contain the Footer component', () => {
        expect(wrapper.find('Footer')).toHaveLength(1);
    });
    it('checks that CourseList is not displayed', () => {
        expect(wrapper.find('CourseList')).toHaveLength(0);
    });
    it('checks that the logOut function and the alert function is called with the good string', () => {
        const mockLogOut = jest.fn();
        const logger = jest.spyOn(window, 'alert');
        expect(logger);
        expect(mockLogOut);
        jest.restoreAllMocks();
    });
    it('checks that default state for displayDrawer is false', () => {
        expect(wrapper.state().displayDrawer).toBe(false);
    });
    it('checks that after calling handleDisplayDrawer, the state should now be true', () => {
        wrapper.setState({displayDrawer: false});
        expect(wrapper.state().displayDrawer).toBe(false);
        wrapper.instance().handleDisplayDrawer();
        expect(wrapper.state().displayDrawer).toBe(true);
    });
    it('checks that after calling handleHideDrawer, the state should now be true', () => {
        wrapper.setState({displayDrawer: true});
        expect(wrapper.state().displayDrawer).toBe(true);
        wrapper.instance().handleHideDrawer();
        expect(wrapper.state().displayDrawer).toBe(false);
    });
});

describe('Tests the App component when isLoggedIn is true', () => {
    it('Tests that the Login component is not included.', () => {
        const wrapper = shallow(<App isLoggedIn={true}/>);
        expect(wrapper.find('Login')).toHaveLength(0);
    });
    it('should contain the Notifications component', () => {
        const wrapper = shallow(<App isLoggedIn={true}/>);
        expect(wrapper.find('CourseList')).toHaveLength(1);
    });
});
