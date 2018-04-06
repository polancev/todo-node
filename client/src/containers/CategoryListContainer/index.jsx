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
import EditDialog from '../../components/EditDialog';

const mapStateToProps = state => ({
  list: state.categories.list,
});

// const mapDispatchToProps = (dispatch) => null;

const CategoryContainer = ({
  list, parent, mode, onToggle, onEditStart,
}) => {
  const filtredlist = list.filter(category => category.parent === parent);
  if (!filtredlist.length) {
    return null;
  }
  return (
    <ul>
      { filtredlist.map(category => (
        <li key={category._id} className="category_list-item">
          <Category
            category={category}
            onToggle={onToggle}
            onEdit={onEditStart}
            mode={mode}
          />
          { category.isOpen &&
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
  );
};

CategoryContainer.propTypes = {
  mode: PropTypes.oneOf(['edit', 'view']).isRequired,
  list: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  parent: PropTypes.oneOfType([PropTypes.string, null]),
  onToggle: PropTypes.func.isRequired,
  onEditStart: PropTypes.func.isRequired,
  onEditEnd: PropTypes.func.isRequired,
  onEditCancel: PropTypes.func.isRequired,
};

CategoryContainer.defaultProps = {
  list: [],
  parent: null,
};

const ConnectedCategoryContainer = connect(mapStateToProps, {
  onToggle: categoryToggle,
  onEditStart: categoryEditStart,
  onEditEnd: categoryEditEnd,
  onEditCancel: categoryEditCancel,
})(CategoryContainer);

export default ConnectedCategoryContainer;
