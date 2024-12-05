import React from "react";
import { shallow } from 'enzyme';
import CourseListRow from "./CourseListRow";

describe('Tests the CourseListRow component', () => {
    it('Tests that the component renders one cell with colspan = 2 when textSecondCell does not exist', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell={'Test'}/>);
        expect(wrapper.find('th[colSpan=2]')).toHaveLength(1);
    });
    it('Tests that the component renders two cells when textSecondCell is present', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell={'Test'} textSecondCell={'Test'}/>);
        expect(wrapper.find('th')).toHaveLength(2);
    });
    it('Tests that the component renders correctly two td elements within a tr element', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell={'Test'} textSecondCell={'Test'}/>);
        expect(wrapper.find('tr td')).toHaveLength(2);
    });
});
