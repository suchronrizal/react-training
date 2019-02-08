const initialState = {
  loading: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
