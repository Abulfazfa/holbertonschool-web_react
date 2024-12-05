import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('Tests the HOC WithLogging', () => {
    let mockConsole;
    beforeEach(() => {
        mockConsole = jest.spyOn(console, 'log').mockImplementation(() => {});
    });
    afterEach(() => {
        jest.restoreAllMocks();
    });
    it('Makes sure WithLogging works fine when the wrapped element is pure html', () => {
        const WrappedComponent = WithLogging(() => <p />);
        const wrapper = shallow(<WrappedComponent />);
        expect(mockConsole).toHaveBeenCalledWith('Component Component is mounted');
        wrapper.unmount();
        expect(mockConsole).toHaveBeenCalledWith('Component Component is going to unmount');
    });
    it('Makes sure WithLogging works fine when the wrapped element is Login', () => {
        const WrappedComponent = WithLogging(Login);
        const wrapper = shallow(<WrappedComponent />);
        expect(mockConsole).toHaveBeenCalledWith('Component Login is mounted');
        wrapper.unmount();
        expect(mockConsole).toHaveBeenCalledWith('Component Login is going to unmount');
    });
});
