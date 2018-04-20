import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../../actions';
import { Categories } from '../../reducers';
import Category from '../../components/Category';
import Modal from '../../components/Modal';
import EditDialog from '../../components/EditDialog';
import ConfirmDialog from '../../components/ConfirmDialog';

const propTypes = {
  mode: PropTypes.oneOf(['edit', 'view']).isRequired,
  list: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
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
  list: [],
  editOpen: false,
  editCategory: null,
  deleteOpen: false,
};


const CategoryContainer = ({
  list, mode,
  editOpen, editCategory, deleteOpen,
  onToggle,
  onEditStart, onEditEnd, onEditCancel,
  onDeleteStart, onDeleteEnd, onDeleteCancel,
}) => (
  <div>
    <ul>
      {list.map(category => (
        <li key={category.id} className="category_list-item">
          <Category
            category={category}
            onToggle={onToggle}
            onEdit={onEditStart}
            onDelete={onDeleteStart}
            mode={mode}
          />
          {category.isOpen &&
            <div className="embedded-list">
              <ConnectedCategoryContainer
                parent={category.id}
                mode={mode}
              />
            </div>}
        </li>
        ))}
    </ul>
    {editOpen &&
      <Modal>
        <EditDialog
          title="edit category title"
          initialValue={editCategory && editCategory.name}
          onSubmit={name => onEditEnd({ ...editCategory, name })}
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

CategoryContainer.propTypes = propTypes;
CategoryContainer.defaultProps = defaultProps;

const mapStateToProps = () => {
  const getCategories = Categories.categoriesByParentCreator();
  return (state, props) => ({
    list: getCategories(state, props),
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

// const mapDispatchToProps = (dispatch) => null;

const ConnectedCategoryContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);

export default ConnectedCategoryContainer;
