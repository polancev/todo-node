import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../../actions';
import { Categories } from '../../reducers';
import Category from '../../components/Category';
import Modal from '../../components/Modal';
import EditDialog from '../../components/EditDialog';


const CategoryContainer = ({
  list, editOpen, editCategory, mode, onToggle, onEditStart, onEditEnd, onEditCancel,
}) => {
  // const filtredlist = list.filter(category => category.parent === parent);
  // if (!filtredlist.length) {
  //   return null;
  // }
  console.log(list);
  return (
    <div>
      <ul>
        {list.map(category => (
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
          title="edit category title"
          initialValue={editCategory && editCategory.name}
          onSubmit={name => onEditEnd({ ...editCategory, name })}
          onReset={onEditCancel}
        />
      </Modal>
      }
    </div>
  );
};
CategoryContainer.propTypes = {
  mode: PropTypes.oneOf(['edit', 'view']).isRequired,
  // parent: PropTypes.oneOfType([PropTypes.string]).isRequired,
  list: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  editOpen: PropTypes.bool,
  editCategory: PropTypes.instanceOf(Object),
  onToggle: PropTypes.func.isRequired,
  onEditStart: PropTypes.func.isRequired,
  onEditEnd: PropTypes.func.isRequired,
  onEditCancel: PropTypes.func.isRequired,
};

CategoryContainer.defaultProps = {
  list: [],
  editOpen: false,
  editCategory: null,
};

const mapStateToProps = () => {
  const getCategories = Categories.categoriesByParentCreator();
  return (state, props) => ({
    list: getCategories(state, props),
    editOpen: state.categories.editOpen,
    editCategory: state.categories.editCategory,
  });
};

const mapDispatchToProps = {
  onToggle: actions.categoryToggle,
  onEditStart: actions.categoryEditStart,
  onEditEnd: actions.categoryEditEnd,
  onEditCancel: actions.categoryEditCancel,
};

// const mapDispatchToProps = (dispatch) => null;

const ConnectedCategoryContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);

export default ConnectedCategoryContainer;
