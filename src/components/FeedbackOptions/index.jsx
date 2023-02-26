import PropTypes from 'prop-types';

import './style.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="feedback-options">
      {
        options.map((option, index) => (
          <button
            type="button"
            className="button-feedback"
            name={option} onClick={onLeaveFeedback}
            key={index}
          >
            {option}
          </button>
        ))
      }
    </div>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
