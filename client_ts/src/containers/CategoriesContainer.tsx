import * as React from 'react';
import { connect, InferableComponentEnhancerWithProps } from 'react-redux';
import { CategoryI } from '../types/Category';
import StateI from '../types/State';

interface StateProps {
  list: CategoryI[];
}

interface DispatchProps { 
}

interface SelfProps {
  parent: CategoryI | null;
}

const mapStateToProps = (state: StateI) => ({
  list: state.categories.list,
});

// const mapDispatchToProps = (dispatch) => null;

class CategoryContainer extends React.Component<StateProps & DispatchProps & SelfProps, {}> {
  render() {
    const list = this.props.list.filter(category => category.parent === this.props.parent);
    if (!list.length) {
      return null;
    }
    return (
      <ul>
        {list.map(category => 
          <li style={{border: '1px solid grey'}} key={category._id}>
            {category.name}
            <ConnectedCategoryContainer parent={category._id} />
          </li>
        )}
      </ul>
    );
  }  
}

const ConnectedCategoryContainer
  :InferableComponentEnhancerWithProps<{ list: CategoryI[]; }, {}>
  = connect(mapStateToProps, {
})(CategoryContainer);

export default ConnectedCategoryContainer;
