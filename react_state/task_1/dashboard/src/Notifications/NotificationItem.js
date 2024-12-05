import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export default class NotificationItem extends React.PureComponent {
    render() {
        const styleToApply = this.props.type == 'default' ? styles.default : styles.urgent;
        const style = css(styleToApply, styles.small);
        return (
            <li className={style} data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} onClick={() => this.props.markAsRead(this.props.id)}>
                {this.props.value}
            </li>
        );
    }
}

NotificationItem.propTypes = {
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    type: PropTypes.string.isRequired,
    markAsRead: PropTypes.func,
    id: PropTypes.number
};

NotificationItem.defaultProps = {
    type: 'default',
    html: null,
    markAsRead: () => {},
    id: 0
};

const styles = StyleSheet.create({
    default: {
        color: 'blue'
    },
    urgent: {
        color: 'red'
    },
    small: {
        '@media (max-width: 900px)': {
            padding: '10px 8px',
            fontSize: 20,
            listStyle: 'none',
            borderBottom: 'solid black 1px'
        }
    }
});
