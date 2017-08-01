import React, { PropTypes } from 'react';

const EditIcon = ({ onClick }) => (
  <span className="glyphicon glyphicon-pencil" onClick={onClick}></span>
);

EditIcon.propTypes = {
  onClick: PropTypes.func,
};

export default EditIcon;
