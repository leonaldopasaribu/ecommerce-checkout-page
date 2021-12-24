import React from "react";

import { CheckoutLayoutWrapper } from "./styles";

import DeliveryDetails from "../DeliveryDetails/index";
import Payment from "../Payment/index";

const CheckoutLayout = () => {
  return (
    <CheckoutLayoutWrapper>
      {/* <DeliveryDetails /> */}
      <Payment />
    </CheckoutLayoutWrapper>
  );
};

export default CheckoutLayout;
