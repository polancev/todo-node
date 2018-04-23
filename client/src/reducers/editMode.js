const TypeKeys = {
  TOGGLE_EDIT_MODE: 'TOGGLE_EDIT_MODE',
};

const editMode = (state = true, action) => {
  switch (action.type) {
    case TypeKeys.TOGGLE_EDIT_MODE:
      return !state;
    default:
      return state;
  }
};

export const isEditMode = state => state.editMode;

export default editMode;
