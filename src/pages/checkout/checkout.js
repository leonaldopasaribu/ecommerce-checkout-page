import React from "react";
import { useSelector } from "react-redux";

import { CheckoutLayoutWrapper } from "./styles";

import DeliveryDetails from "./modules/components/delivery-details-step";
import Payment from "./modules/components/payment-step";
import Finish from "./modules/components/summary-step";

export default function Checkout() {
  const { checkoutStep } = useSelector((state) => state.checkout);

  return (
    <div className="container">
      <CheckoutLayoutWrapper>
        {checkoutStep === "delivery" && <DeliveryDetails />}
        {checkoutStep === "payment" && <Payment />}
        {checkoutStep === "finish" && <Finish />}
      </CheckoutLayoutWrapper>
    </div>
  );
}
