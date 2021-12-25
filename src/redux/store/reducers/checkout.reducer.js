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
    },
    {
      id: "jne",
      shipmentName: "JNE",
      cost: 9000,
    },
    {
      id: "p-courier",
      shipmentName: "Personal Courier",
      cost: 29000,
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
        isLoading: true,
        checkoutStep: "payment",
      };

    case CHECKOUT_PAYMENT_SUCCESS:
      return {
        ...state,
        isLoading: true,
        checkoutStep: "finish",
      };

    case CHECKOUT_FINISH_SUCCESS:
      return {
        ...state,
        isLoading: true,
        checkoutStep: "delivery",
      };

    case CHECKOUT_BACK_DELIVERY:
      return {
        ...state,
        isLoading: true,
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
