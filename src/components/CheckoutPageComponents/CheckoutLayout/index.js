import React from "react";

import { CheckoutLayoutWrapper } from "./styles";

import DeliveryDetails from "../DeliveryDetails/index";

const CheckoutLayout = () => {
  return (
    <CheckoutLayoutWrapper>
      <DeliveryDetails />
    </CheckoutLayoutWrapper>
  );
};

export default CheckoutLayout;
