const initialState = {
  name: "",
  telega: "",
  email: "",
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "SET_TELEGA":
      return {
        ...state,
        telega: action.payload,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default contactsReducer;
