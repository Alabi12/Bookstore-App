const initialState = [];

export const CHECKSTATUS = 'check-status';

// Action Creators
export function checkStatus() {
  return { type: CHECKSTATUS };
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case CHECKSTATUS: {
      return 'Under construction';
    }
    default:
      return state;
  }
};
