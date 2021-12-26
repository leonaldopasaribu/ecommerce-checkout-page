import {} from "../../actionTypes";

const initialState = {
  isLoading: false,
  errorMessage: null,
  message: "",
  isError: false,
  userData: {
    firstName: "Leonaldo",
    lastName: "Pasaribu",
    balance: "1500000",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
