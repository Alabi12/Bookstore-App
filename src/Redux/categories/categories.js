const STATUS_CHECKER = 'booklist/books/STATUS_CHECKER';

const categories = [];

const categoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case STATUS_CHECKER:
      return 'Under construction';
    default:
      return state;
  }
};

export const statusCheck = () => ({
  type: STATUS_CHECKER,
});

export default categoriesReducer;
