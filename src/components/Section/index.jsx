import PropTypes from 'prop-types';

import  './style.scss';

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <h2 className="section_title">{title}</h2>
      {
        children
      }
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Section;
