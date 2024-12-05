import React from 'react';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';

function CourseList({ listCourses }) {
    let content;

    if (listCourses.length === 0) content = <CourseListRow textFirstCell='No course available yet' isHeader={false} />;
    else {
        content = listCourses.map((course) =>
            <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false}/>
        );
    }

    return (
        <table className={css(styles.courseList)} id="CourseList">
            <thead>
                <CourseListRow className={css(styles.firstRow, styles.th)} textFirstCell="Available courses" isHeader={true}/>
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
            </thead>
            <tbody>
                {content}
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
    listCourses: []
};

const styles = StyleSheet.create({
    courseList: {
        border: 'solid 1px rgb(227, 220, 220)',
        width: '100%',
        textAlign: 'left'
    },
    
});

export default CourseList;
