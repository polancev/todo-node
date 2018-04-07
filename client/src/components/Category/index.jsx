import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton/index';
import './index.css';

const Category = ({
  category, onToggle, onEdit, mode,
}) => (
  <span className="category">
    <IconButton type={category.isOpen ? 'up' : 'down'} onClick={() => onToggle(category._id, !category.isOpen)} />
    <span>{category.name}</span>
    {(mode === 'edit') && (
      <div>
        <IconButton type="edit" onClick={() => onEdit()} />
      </div>)
    }
  </span>
);

Category.propTypes = {
  category: PropTypes.shape().isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['edit', 'view']).isRequired,
};

export default Category;
