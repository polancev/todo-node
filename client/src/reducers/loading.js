const TypeKeys = {
  START_LOADING: 'START_LOADING',
  END_LOADING: 'END_LOADING',
};

const loading = (state = false, action) => {
  switch (action.type) {
    case TypeKeys.START_LOADING:
      return true;
    case TypeKeys.END_LOADING:
      return false;
    default:
      return state;
  }
};

export const isLoading = state => state.isLoading;

export default loading;
