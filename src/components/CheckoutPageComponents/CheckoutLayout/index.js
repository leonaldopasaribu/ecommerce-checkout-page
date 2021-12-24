import React from "react";

import { CheckoutLayoutWrapper } from "./styles";

import DeliveryDetails from "../DeliveryDetails/index";
import Payment from "../Payment/index";
import Finish from "../Finish/index";

const CheckoutLayout = () => {
  return (
    <CheckoutLayoutWrapper>
      {/* <DeliveryDetails /> */}
      {/* <Payment /> */}
      <Finish />
    </CheckoutLayoutWrapper>
  );
};

export default CheckoutLayout;
