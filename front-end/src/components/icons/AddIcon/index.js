import React, { PropTypes } from 'react';

const AddIcon = ({ onClick }) => (
  <span className="glyphicon glyphicon-plus" onClick={onClick}></span>
);

AddIcon.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default AddIcon;
