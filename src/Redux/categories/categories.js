const initialState = [];

// Action
const CHECK_STATUS = 'categories/categories/CHECK_STATUS';

// Action Creators
export const checksStatus = () => (dispatch) => {
  dispatch({ type: CHECK_STATUS, payload: 'Under Construction' });
};

// Reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [action.payload];
    default:
      return state;
  }
};

export default categoriesReducer;
