import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

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

import { addPayment } from "../../../../redux/store/actions/checkout.action";

import { AppContext } from "../../../../context/AppContext";

const SummaryPayment = () => {
  const dispatch = useDispatch();
  const { isEWallet, isBankTransfer, isVirtualAccount, currencyFormatter } =
    useContext(AppContext);

  const checkout = useSelector((state) => state.checkout);

  const onAddPayment = () => {
    dispatch(addPayment());
  };

  return (
    <SummaryWrapper>
      <Title>Summary</Title>
      <TotalProduct>10 items purchased</TotalProduct>
      <TotalProductBottom />

      <DeliveryEstimation>
        <Label>Delivery estimation</Label>
        <Estimation>
          {checkout.summary.hasOwnProperty("cost")
            ? `
          ${checkout.summary.estimate} by ${checkout.summary.shipmentName}
          `
            : "Please Choose Shipment!"}
        </Estimation>
      </DeliveryEstimation>

      <TotalDelivery>
        <TotalDetail>
          <TotalTitle>Cost of goods</TotalTitle>
          <TotalValue>500,000</TotalValue>
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
          <TotalPaymentValue>{currencyFormatter(505900)}</TotalPaymentValue>
        </TotalPayment>

        <Buttons
          title={`Payment with ${
            (isEWallet && "e-Wallet") ||
            (isBankTransfer && "Bank Transfer") ||
            (isVirtualAccount && "Virtual Account")
          }`}
          onClick={() => onAddPayment()}
          disabled={!checkout.summary.hasOwnProperty("id")}
        />
      </TotalDelivery>
    </SummaryWrapper>
  );
};

export default SummaryPayment;
