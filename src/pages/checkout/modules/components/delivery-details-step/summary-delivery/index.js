import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

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

import Buttons from "shared/components/buttons";

import { addDeliveryDetails } from "redux/store/actions/checkout.action";

import { AppContext } from "context/AppContext";

const SummaryDelivery = () => {
  const dispatch = useDispatch();
  const checkout = useSelector((state) => state.checkout);
  const { currencyFormatter } = useContext(AppContext);

  const onAddDeliveryDetails = () => {
    dispatch(addDeliveryDetails());
  };

  const costOfGood = 500000;

  const totalPayment = costOfGood + checkout.dropShippingFee;

  return (
    <SummaryWrapper>
      <Title>Summary</Title>
      <TotalProduct>10 items purchased</TotalProduct>
      <TotalDelivery>
        <TotalDetail>
          <TotalTitle>Cost of goods</TotalTitle>
          <TotalValue>{currencyFormatter(500000)}</TotalValue>
        </TotalDetail>
        <TotalDetail>
          <TotalTitle>Dropshipping Fee</TotalTitle>
          <TotalValue>{currencyFormatter(checkout.dropShippingFee)}</TotalValue>
        </TotalDetail>
        <TotalPayment>
          <TotalPaymentTitle>Total</TotalPaymentTitle>
          <TotalPaymentValue>
            {" "}
            {currencyFormatter(totalPayment)}
          </TotalPaymentValue>
        </TotalPayment>
        <Buttons
          label="Continue to Payment"
          onClick={() => onAddDeliveryDetails()}
        />
      </TotalDelivery>
    </SummaryWrapper>
  );
};

export default SummaryDelivery;
