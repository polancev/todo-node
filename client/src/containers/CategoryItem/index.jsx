import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../../actions';
import { Categories, EditMode } from '../../reducers';
import CategoryListContainer from '../CategoryListContainer';
import IconButton from '../../components/IconButton';
import Modal from '../../components/Modal';
import EditDialog from '../../components/EditDialog';
import ConfirmDialog from '../../components/ConfirmDialog';
import './index.css';

const propTypes = {
  category: PropTypes.instanceOf(Object).isRequired,
  editMode: PropTypes.bool.isRequired,
  editOpen: PropTypes.bool,
  editCategory: PropTypes.instanceOf(Object),
  deleteOpen: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  onEditStart: PropTypes.func.isRequired,
  onEditEnd: PropTypes.func.isRequired,
  onEditCancel: PropTypes.func.isRequired,
  onDeleteStart: PropTypes.func.isRequired,
  onDeleteEnd: PropTypes.func.isRequired,
  onDeleteCancel: PropTypes.func.isRequired,
};

const defaultProps = {
  editOpen: false,
  editCategory: null,
  deleteOpen: false,
};

const CategoryItem = ({
  category,
  editMode,
  onToggle,
  onEditStart, onEditEnd, onEditCancel, editOpen, editCategory,
  onDeleteStart, onDeleteEnd, onDeleteCancel, deleteOpen,
}) => (
  <div>
    <span className="category">
      <IconButton
        type={category.isOpen ? 'up' : 'down'}
        onClick={() => onToggle(category.id, !category.isOpen)}
      />
      <span>{category.name}</span>
      {editMode && (
        <div>
          <IconButton type="edit" onClick={() => onEditStart(category)} />
          <IconButton type="delete" onClick={() => onDeleteStart(category.id)} />
        </div>)
      }
    </span>
    {category.isOpen &&
      <div className="embedded-list">
        <CategoryListContainer parent={category.id} />
      </div>}
    {editOpen &&
      <Modal>
        <EditDialog
          title="edit category title"
          initialValue={editCategory && editCategory.name}
          onSubmit={onEditEnd}
          onReset={onEditCancel}
        />
      </Modal>}
    {deleteOpen &&
      <Modal>
        <ConfirmDialog
          title="Are you sure you want to delete this category?"
          onSubmit={onDeleteEnd}
          onReset={onDeleteCancel}
        />
      </Modal>}
  </div>
);

CategoryItem.propTypes = propTypes;
CategoryItem.defaultProps = defaultProps;

const mapStateToProps = () => (state, props) => {
  const categorySelector = Categories.categorySelectorCreator();
  return ({
    category: categorySelector(state, props),
    editMode: EditMode.isEditMode(state, props),
    editOpen: state.categories.editOpen,
    editCategory: state.categories.editCategory,
    deleteOpen: state.categories.deleteOpen,
  });
};

const mapDispatchToProps = {
  onToggle: actions.categoryToggle,
  onEditStart: actions.categoryEditStart,
  onEditEnd: actions.categoryEditEnd,
  onEditCancel: actions.categoryEditCancel,
  onDeleteStart: actions.categoryDeleteStart,
  onDeleteEnd: actions.categoryDeleteEnd,
  onDeleteCancel: actions.categoryDeleteCancel,
};

const ConnectedCategoryItem = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryItem);

export default ConnectedCategoryItem;
