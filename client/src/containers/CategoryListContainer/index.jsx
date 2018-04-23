import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import actions from '../../actions';
import { CategoryList } from '../../reducers';
import Category from '../CategoryItem';


const propTypes = {
  list: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};

const CategoryContainer = ({
  list,
}) => (
  <div>
    <ul>
      {list.map(category => (
        <li key={category.id} className="category_list-item">
          <Category categoryId={category.id} />
        </li>
        ))}
    </ul>
  </div>
);

CategoryContainer.propTypes = propTypes;

const mapStateToProps = () => {
  const categoriesByParentSelector = CategoryList.categoriesByParentSelectorCreator();
  return (state, props) => ({
    list: categoriesByParentSelector(state, props),
  });
};

const mapDispatchToProps = {};

const ConnectedCategoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryContainer);

export default ConnectedCategoryContainer;
