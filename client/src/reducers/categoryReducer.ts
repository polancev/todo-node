// import State from '../types/State';
import { CategoryTypeKeys, CategoryLoadAction } from '../types/CategoryActions';
import { CategoryI } from '../types/Category';
import { handleActions } from 'redux-actions';

const categoryReducer = handleActions(
  {
    [CategoryTypeKeys.LOAD]: {
      next: (state, action: CategoryLoadAction<CategoryI[]>) => ({
        ...state,
        categories: action.payload
      })
    }
  }, 
  {}
);

// const categoryReducer = handleActions(
//   {
//     [CategoryTypeKeys.LOAD]: {
//       next: (state, action: ActionMeta) => ({
//         ...state,
//         categories: action.payload,
//       }),
//       throw: (state, action) => ({
//         ...state,
//         error: action.payload && action.payload.toString(),
//       })
//     }
//   }, 
//   { 
//     categories: [],
//     // error: '', 
//   }
// );

// next: (state, action) => ({
//   ...state,
//   categories: action.payload,
// }),
// throw: (state, action) => ({
//   ...state,
//   error: action.payload.toString(),
// }),

// const categoryReducer = (state: Object = {}, action: CategoryActionTypes) => {
//   switch (action.type) {
//     case CategoryTypeKeys.CATEGORY_LOAD:
//       console.log('add', action.payload.then);
//       if (action.payload.then) {
//         return {
//           ...state,
//           pending: true,
//         };
//       } else if (action.error) {
//         return {
//           ...state,
//           error: action.payload.toString(),
//         };
//       }
//       return {
//         ...state,
//         pending: false,
//         categories: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export default categoryReducer;
