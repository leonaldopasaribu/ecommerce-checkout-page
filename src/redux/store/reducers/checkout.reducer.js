import {
  CHECKOUT_REQUEST,
  CHECKOUT_DELIVERY_SUCCESS,
  CHECKOUT_PAYMENT_SUCCESS,
  CHECKOUT_FINISH_SUCCESS,
  CHECKOUT_BACK_DELIVERY,
  CHECKOUT_DROPSHIPPING_FEE,
} from "../../actionTypes";

const initialState = {
  isLoading: false,
  errorMessage: null,
  message: "",
  isError: false,
  checkoutStep: "delivery",
  summary: {},
  shipmentData: [
    {
      id: "go-send",
      shipmentName: "Go-SEND",
      cost: 15000,
      estimate: "today",
    },
    {
      id: "jne",
      shipmentName: "JNE",
      cost: 9000,
      estimate: "2 days",
    },
    {
      id: "p-courier",
      shipmentName: "Personal Courier",
      cost: 29000,
      estimate: "1 day",
    },
  ],
};

const checkout = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
        isError: false,
      };

    case CHECKOUT_DELIVERY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        checkoutStep: "payment",
      };

    case CHECKOUT_PAYMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        checkoutStep: "finish",
      };

    case CHECKOUT_FINISH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        checkoutStep: "delivery",
        summary: {},
      };

    case CHECKOUT_BACK_DELIVERY:
      return {
        ...state,
        isLoading: false,
        checkoutStep: "delivery",
      };

    case CHECKOUT_DROPSHIPPING_FEE:
      return {
        ...state,
        summary: action.payload,
      };
    default:
      return state;
  }
};

export default checkout;
