const INIT_STATE = {
  products: [],
};

export const productReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
