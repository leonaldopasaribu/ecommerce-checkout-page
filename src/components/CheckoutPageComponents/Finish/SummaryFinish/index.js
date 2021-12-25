import React, { useContext } from "react";
import { useSelector } from "react-redux";

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

import { AppContext } from "../../../../context/AppContext";

const SummaryFinish = () => {
  const { currencyFormatter } = useContext(AppContext);
  const checkout = useSelector((state) => state.checkout);

  return (
    <SummaryWrapper>
      <Title>Summary</Title>
      <TotalProduct>10 items purchased</TotalProduct>
      <TotalProductBottom />

      <DeliveryEstimation>
        <Label>Delivery estimation</Label>
        <Estimation>
          {checkout.summary.hasOwnProperty('cost')
            ? `
          ${checkout.summary.estimate} by ${checkout.summary.shipmentName}
          `
            : "Please Choose Shipment!"}
        </Estimation>
      </DeliveryEstimation>

      <DeliveryEstimation>
        <Label>Payment method</Label>
        <Estimation>Bank Transfer</Estimation>
      </DeliveryEstimation>

      <TotalDelivery>
        <TotalDetail>
          <TotalTitle>Cost of goods</TotalTitle>
          <TotalValue>{currencyFormatter(500000)}</TotalValue>
        </TotalDetail>
        <TotalDetail>
          <TotalTitle>Dropshipping Fee</TotalTitle>
          <TotalValue>
            {checkout.summary.hasOwnProperty("cost")
              ? currencyFormatter(checkout.summary.cost)
              : 0}
          </TotalValue>
        </TotalDetail>
        <TotalDetail>
          <TotalTitle>
            <b>{checkout.summary.shipmentName}</b> shipment
          </TotalTitle>
          <TotalValue>15,000</TotalValue>
        </TotalDetail>
        <TotalPayment>
          <TotalPaymentTitle>Total</TotalPaymentTitle>
          <TotalPaymentValue>505,900</TotalPaymentValue>
        </TotalPayment>
      </TotalDelivery>
    </SummaryWrapper>
  );
};

export default SummaryFinish;
