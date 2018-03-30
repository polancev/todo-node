import * as React from 'react';
import { connect } from 'react-redux';
import { CategoryI } from '../types/Category';

interface StateProps {
  categories: CategoryI[];
}

interface DispatchProps { 
}

interface SelfProps {
  parent: CategoryI | null;
}

const mapStateToProps = (state: { categoryReducer: { categories: CategoryI[] }}) => ({
  categories: state.categoryReducer.categories,
});

// const mapDispatchToProps = (dispatch) => null;

class CategoryContainer extends React.Component<StateProps & DispatchProps & SelfProps, {}> {
  render() {
    return (
      <ul>
        {this.props.categories
          .filter(category => category.parent === this.props.parent)
          .map(category => <li key={category.name}>{category.name}</li>)
        }
      </ul>
    );
  }  
}

export default connect(mapStateToProps, {

})(CategoryContainer);
