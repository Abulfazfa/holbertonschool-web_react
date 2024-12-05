import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Tests the Notifications component with an empty array', () => {
    it('Tests that Notifications renders without crashing', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.exists()).toBe(true);
    });
    it('Tests that Notifications renders 0 list item', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find('NotificationItem')).toHaveLength(0);
    });
    it('Tests that Notifications renders the good text', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        const p = wrapper.find('[className^="notifications"] p');
        expect(wrapper.find('[className^="notifications"] p')).toHaveLength(1);
        expect(p.text()).toBe('No new notification for now');
    });
    it('Tests that the menu item is being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('[className^="menuItem"]')).toHaveLength(1);
    });
    it('Tests that the .Notifications is not being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('[className^="notifications"]')).toHaveLength(0);
    });
    it('Tests that the menu item is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find('[className^="hidden"]')).toHaveLength(1);
    });
    it('Tests that the menu item is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find('[className^="hidden"]')).toHaveLength(1);
    });
});

describe('Tests the Notifications component', () => {
    let wrapper;
    let listNotifications;
    beforeAll(() => {
        listNotifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
            { id: 3, type: 'urgent', html: {__html: '<u>test</u>'} }
        ];
        wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    });
    it('Tests that Notifications renders 3 list items', () => {
        expect(wrapper.find('NotificationItem')).toHaveLength(3);
    });
    it('Tests that Notifications renders the good text', () => {
        const p = wrapper.find('[className^="notifications"] p');
        expect(wrapper.find('[className^="notifications"] p')).toHaveLength(1);
        expect(p.text()).toBe('Here is the list of notifications');
    });
    it('Tests that the first NotificationItem element renders the right html', () => {
        const p = wrapper.find('[className^="notifications"] NotificationItem:first-child');
        expect(p).toHaveLength(1);
    });
    it('Tests that when calling the function markAsRead on an instance of the component, the spy is being called with the right message', () => {
        const mockConsole = jest.spyOn(console, 'log').mockImplementation(() => {});
        wrapper.instance().markAsRead(1);
        expect(mockConsole).toHaveBeenCalledWith('Notification 1 has been marked as read');
        jest.restoreAllMocks();
    });
    it('Tests that when updating the props of the component with the same list, the component doesn’t rerender', () => {
        const renderSpy = jest.spyOn(Notifications.prototype, 'render');
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);

        wrapper.setProps({ listNotifications: listNotifications });

        expect(renderSpy).toHaveBeenCalledTimes(1);
        jest.restoreAllMocks();
    });
    it('Tests that when updating the props of the component with a longer list, the component does rerender', () => {
        const updatedList = [
            {id: 1,type: 'default',value: 'New course available'},
            {id: 2,type: 'urgent',value: 'New resume available'},
            {id: 3,type: 'urgent',html: {__html: '<u>test</u>'}},
            {id: 4,type: 'urgent',html: {__html: '<u>test</u>'}}
        ];
        const renderSpy = jest.spyOn(Notifications.prototype, 'render');
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);

        wrapper.setProps({ listNotifications: updatedList });

        expect(renderSpy).toHaveBeenCalledTimes(2);
        jest.restoreAllMocks();
    });
    it('checks that clicking on the menu item calls handleDisplayDrawer', () => {
        const handleDisplayDrawer = jest.fn();
        const wrapper = shallow(<Notifications listNotifications={listNotifications}
                                               handleDisplayDrawer={handleDisplayDrawer}/>);
        const menuItem = wrapper.find('[className^="menuItem"] p');
        menuItem.simulate('click');
        expect(handleDisplayDrawer).toHaveBeenCalledTimes(1);
        handleDisplayDrawer.mockClear();
    });
    it('checks that clicking on the button calls handleHideDrawer', () => {
        const mockConsole = jest.spyOn(console, 'log').mockImplementation(() => {});
        const handleHideDrawer = jest.fn();
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}
                                               handleHideDrawer={handleHideDrawer}/>);
        const button = wrapper.find('button');
        button.simulate('click');
        expect(handleHideDrawer).toHaveBeenCalledTimes(1);
        handleHideDrawer.mockClear();
        jest.restoreAllMocks();
    });
});
