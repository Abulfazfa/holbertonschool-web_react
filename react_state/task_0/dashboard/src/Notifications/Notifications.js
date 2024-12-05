import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItemShape from './NotificationItemShape';
import NotificationItem from './NotificationItem';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.displayDrawer !== nextProps.displayDrawer) return true;
    if (this.props.listNotifications.length < nextProps.listNotifications.length) return true;
    return false;
  }

  render() {
    const buttonStyle = {
      background: 'transparent',
      border: 'none',
      position: "absolute",
      top: 2,
      right: 2
    }
    const menuItemStyle = css(this.props.displayDrawer ? styles.hidden : styles.menuItem);
    let content;

    if (this.props.listNotifications.length === 0) content = <p>No new notification for now</p>;
    else {
      content = this.props.listNotifications.map((notification) =>
          <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} markAsRead={this.markAsRead} id={notification.id}/>);
    }
    const { handleDisplayDrawer, handleHideDrawer } = this.props;
    return (
        <>
          <div className={menuItemStyle}>
            <p onClick={handleDisplayDrawer}>Your notifications</p>
          </div>
          {this.props.displayDrawer ? (
              <div className={css(styles.notifications, styles.small)} id="Notifications">
                {this.props.listNotifications.length === 0 ? content : (<p>Here is the list of notifications</p>)}
                <button aria-label='Close' onClick={handleHideDrawer} style={buttonStyle}>
                  <img src={closeIcon} alt='Close icon' width={10}/>
                </button>
                {this.props.listNotifications.length === 0 ? null : (<ul className={css(styles.noPadding)}>{content}</ul>)}
              </div>
          ) : null}
        </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {}
};

const opacityAnimationFrames = {
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
};

const bounceAnimationFrames = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
    marginRight: '.5rem',
    marginBottom: '.5rem',
    background: '#fff8f8',
    float: 'right',
    ':hover': {
      cursor: 'pointer',
      animationName: [opacityAnimationFrames, bounceAnimationFrames],
      animationDuration: '1s, 0.5s',
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: '3',
    },
  },

  hidden: {
    display: 'none'
  },

  notifications: {
    position: 'absolute',
    right: '1rem',
    padding: '1rem',
    width: '20rem',
    border: 'dashed #e11d3f'
  },
  small: {
    '@media (max-width: 900px)': {
      padding: 0,
      fontSize: 20,
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none',
      background: 'white',
      zIndex: 10
    }
  },
  noPadding: {
    '@media (max-width: 900px)': {
      padding: 0,
    }
  },
});

export default Notifications;
