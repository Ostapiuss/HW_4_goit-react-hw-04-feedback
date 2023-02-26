import PropTypes from 'prop-types';

import './style.scss';

const Notification = ({ message }) => {
  return (
    <div className="notification">
      <h3 className="notification-message">
        {message}
      </h3>
    </div>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notification;
