// import axios from 'axios';
// import { createAction, Action, ActionFunction0 } from 'redux-actions';
import { CategoryI } from '../types/Category';
import { 
  CategoryTypeKeys, 
  CategoryLoadAction 
} from '../types/CategoryActions';

// const BASE_URL = 'http://localhost:7777';

export function categoryLoadAction(): CategoryLoadAction<CategoryI[]> {
  return {
    type: CategoryTypeKeys.LOAD,
    payload: []
  };
}

// export const categoryLoadAction: CategoryLoadAction<CategoryI> = createAction(
//   CategoryTypeKeys.LOAD,
//   async () => {
//     const { data } = await axios({
//       method: 'GET',
//       url: `${BASE_URL}/category`
//     });
//     return data;
//   }
// );

  // return (dispatch: Function) => {
  //   dispatch({ type: CategoryTypeKeys.CATEGORY_LOAD });
  //   axios({
  //     method: 'GET',
  //     url: `${BASE_URL}/category`
  //   }).then(res => dispatch({
  //     type: CategoryTypeKeys.CATEGORY_LOAD_SUCCESS,
  //     categories: res.data,
  //   })).catch(error => dispatch({
  //     type: CategoryTypeKeys.CATEGORY_LOAD_ERROR,
  //     error: error.toString(),
  //   }));
  // };
