import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  categoryToggle,
  categoryEditStart,
  categoryEditEnd,
  categoryEditCancel,
} from '../../actions/CategoryActions';
import Category from '../../components/Category/index';
import Modal from '../../components/Modal';
import EditDialog from '../../components/EditDialog';

const mapStateToProps = state => ({
  list: state.categories.list,
  editOpen: state.categories.editOpen,
  editCategory: state.categories.editCategory,
});

// const mapDispatchToProps = (dispatch) => null;

const CategoryContainer = ({
  list, editOpen, editCategory, parent, mode, onToggle, onEditStart, onEditEnd, onEditCancel,
}) => {
  const filtredlist = list.filter(category => category.parent === parent);
  if (!filtredlist.length) {
    return null;
  }
  return (
    <div>
      <ul>
        {filtredlist.map(category => (
          <li key={category._id} className="category_list-item">
            <Category
              category={category}
              onToggle={onToggle}
              onEdit={onEditStart}
              mode={mode}
            />
            {category.isOpen &&
              <div className="embedded-list">
                <ConnectedCategoryContainer
                  parent={category._id}
                  mode={mode}
                />
              </div>
            }
          </li>
        ))}
      </ul>
      {editOpen &&
        <Modal>
          <EditDialog 
            title='edit category title'
            initialValue={editCategory && editCategory.name}
            onSubmit={(name) => onEditEnd({ ...editCategory, name })}
            onReset={onEditCancel}
          />
        </Modal>
      }
    </div>
  );
};

CategoryContainer.propTypes = {
  mode: PropTypes.oneOf(['edit', 'view']).isRequired,
  list: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  editOpen: PropTypes.bool,
  editCategory: PropTypes.instanceOf(Object),
  parent: PropTypes.oneOfType([PropTypes.string, null]),
  onToggle: PropTypes.func.isRequired,
  onEditStart: PropTypes.func.isRequired,
  onEditEnd: PropTypes.func.isRequired,
  onEditCancel: PropTypes.func.isRequired,
};

CategoryContainer.defaultProps = {
  list: [],
  parent: null,
  editOpen: false,
  editCategory: null,
};

const ConnectedCategoryContainer = connect(mapStateToProps, {
  onToggle: categoryToggle,
  onEditStart: categoryEditStart,
  onEditEnd: categoryEditEnd,
  onEditCancel: categoryEditCancel,
})(CategoryContainer);

export default ConnectedCategoryContainer;
