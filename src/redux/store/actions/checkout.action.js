import {
  CHECKOUT_REQUEST,
  CHECKOUT_DELIVERY_SUCCESS,
  CHECKOUT_PAYMENT_SUCCESS,
  CHECKOUT_FINISH_SUCCESS,
} from "../../actionTypes";

export const addDeliveryDetails = (data) => async (dispatch) => {
  try {
    dispatch({ type: CHECKOUT_REQUEST });
    dispatch({ type: CHECKOUT_DELIVERY_SUCCESS });
  } catch (e) {
    console.log(e);
  }
};

export const addPayment = (data) => async (dispatch) => {
  const charset = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  const orderId = [...Array(5)]
    .map((_) => charset[Math.floor(Math.random() * charset.length)])
    .join("")
    .toUpperCase();

  try {
    dispatch({ type: CHECKOUT_REQUEST });
    dispatch({ type: CHECKOUT_PAYMENT_SUCCESS, payload: orderId });
  } catch (e) {
    console.log(e);
  }
};

export const finishCheckout = () => async (dispatch) => {
  try {
    dispatch({ type: CHECKOUT_REQUEST });
    dispatch({ type: CHECKOUT_FINISH_SUCCESS });
  } catch (e) {
    console.log(e);
  }
};
