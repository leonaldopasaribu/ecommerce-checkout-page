import React from "react";
import { useSelector } from "react-redux";

import { CheckoutLayoutWrapper } from "./styles";

import DeliveryDetails from "../DeliveryDetails/index";
import Payment from "../Payment/index";
import Finish from "../Finish/index";

const CheckoutLayout = () => {
  const { checkoutStep } = useSelector((state) => state.checkout);

  return (
    <CheckoutLayoutWrapper>
      {checkoutStep === "delivery" && <DeliveryDetails />}
      {checkoutStep === "payment" && <Payment />}
      {checkoutStep === "finish" && <Finish />}
    </CheckoutLayoutWrapper>
  );
};

export default CheckoutLayout;
