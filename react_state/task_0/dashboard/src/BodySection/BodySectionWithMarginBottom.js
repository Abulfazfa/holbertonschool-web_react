import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends React.Component {
    render() {
        return (
            <div className={css(styles.bodySectionWithMargin)}>
                <BodySection {...this.props} />
            </div>
        );
    }
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.string,
        PropTypes.number,
    ])
};

BodySectionWithMarginBottom.defaultProps = {
    title: null,
    children: null
};

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: 40
    }
});

export default BodySectionWithMarginBottom;
