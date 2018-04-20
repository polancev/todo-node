import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton/index';
import './index.css';

const Category = ({
  category, onToggle, onEdit, onDelete, mode,
}) => (
  <span className="category">
    <IconButton type={category.isOpen ? 'up' : 'down'} onClick={() => onToggle(category.id, !category.isOpen)} />
    <span>{category.name}</span>
    {(mode === 'edit') && (
      <div>
        <IconButton type="edit" onClick={() => onEdit(category)} />
        <IconButton type="delete" onClick={() => onDelete(category.id)} />
      </div>)
    }
  </span>
);

Category.propTypes = {
  category: PropTypes.instanceOf(Object).isRequired,
  mode: PropTypes.oneOf(['edit', 'view']).isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Category;
