import React from "react";

import Buttons from "../../../GlobalComponents/Buttons";

import {
  SummaryWrapper,
  Title,
  TotalProduct,
  TotalProductBottom,
  DeliveryEstimation,
  Label,
  Estimation,
  TotalDelivery,
  TotalDetail,
  TotalTitle,
  TotalValue,
  TotalPayment,
  TotalPaymentTitle,
  TotalPaymentValue,
} from "./styles";

const SummaryPayment = () => {
  return (
    <SummaryWrapper>
      <Title>Summary</Title>
      <TotalProduct>10 items purchased</TotalProduct>
      <TotalProductBottom />

      <DeliveryEstimation>
        <Label>Delivery estimation</Label>
        <Estimation>today by GO-SEND</Estimation>
      </DeliveryEstimation>

      <TotalDelivery>
        <TotalDetail>
          <TotalTitle>Cost of goods</TotalTitle>
          <TotalValue>500,000</TotalValue>
        </TotalDetail>
        <TotalDetail>
          <TotalTitle>Cost of goods</TotalTitle>
          <TotalValue>500,000</TotalValue>
        </TotalDetail>
        <TotalDetail>
          <TotalTitle>
            <b>GO-SEND</b> shipment
          </TotalTitle>
          <TotalValue>15,000</TotalValue>
        </TotalDetail>
        <TotalPayment>
          <TotalPaymentTitle>Total</TotalPaymentTitle>
          <TotalPaymentValue>505,900</TotalPaymentValue>
        </TotalPayment>
        
        <Buttons title="Pay with e-Wallet" />
      </TotalDelivery>
    </SummaryWrapper>
  );
};

export default SummaryPayment;
