import React from "react";
import { useDispatch } from "react-redux";

import Buttons from "../../../GlobalComponents/Buttons";

import {
  SummaryWrapper,
  Title,
  TotalProduct,
  TotalDelivery,
  TotalDetail,
  TotalTitle,
  TotalValue,
  TotalPayment,
  TotalPaymentTitle,
  TotalPaymentValue,
} from "./styles";

import { addDeliveryDetails } from "../../../../redux/store/actions/checkout.action";

const SummaryDelivery = () => {
  const dispatch = useDispatch();

  const onAddDeliveryDetails = () => {
    dispatch(addDeliveryDetails());
  };

  return (
    <SummaryWrapper>
      <Title>Summary</Title>
      <TotalProduct>10 items purchased</TotalProduct>
      <TotalDelivery>
        <TotalDetail>
          <TotalTitle>Cost of goods</TotalTitle>
          <TotalValue>500,000</TotalValue>
        </TotalDetail>
        <TotalDetail>
          <TotalTitle>Dropshipping Fee</TotalTitle>
          <TotalValue>5,900</TotalValue>
        </TotalDetail>
        <TotalPayment>
          <TotalPaymentTitle>Total</TotalPaymentTitle>
          <TotalPaymentValue>505,900</TotalPaymentValue>
        </TotalPayment>
        <Buttons
          title="Continue to Payment"
          onClick={() => onAddDeliveryDetails()}
        />
      </TotalDelivery>
    </SummaryWrapper>
  );
};

export default SummaryDelivery;
