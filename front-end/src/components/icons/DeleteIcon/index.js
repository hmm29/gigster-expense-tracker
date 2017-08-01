import React, { PropTypes } from 'react';

const DeleteIcon = ({ onClick }) => (
  <span className="glyphicon glyphicon-remove" onClick={onClick}></span>
);

DeleteIcon.propTypes = {
  onClick: PropTypes.func,
};

export default DeleteIcon;
