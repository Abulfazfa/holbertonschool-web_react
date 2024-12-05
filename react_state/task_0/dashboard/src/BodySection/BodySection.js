import React from 'react';
import PropTypes from 'prop-types';

class BodySection extends React.Component {
    render() {
        return (
            <div className='bodySection'>
                <h2>{this.props.title}</h2>
                {this.props.children}
            </div>
        );
    }
}

BodySection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.string,
        PropTypes.number,
    ])
};

BodySection.defaultProps = {
    title: null,
    children: null
};

export default BodySection;
