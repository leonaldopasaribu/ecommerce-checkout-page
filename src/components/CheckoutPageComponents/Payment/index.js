import React from "react";

import SummaryPayment from "./SummaryPayment";
import Shipment from "./Shipment";
import PaymentMethod from "./PaymentMethod";

import {
  PaymentWrapper,
  StepCheckout,
  StepItem,
  StepNumber,
  StepTitle,
  RightIcon,
  Back,
  BackTitle,
  LeftIcon,
  ContentWrapper,
  Content,
} from "./styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Payment = () => {
  return (
    <PaymentWrapper>
      <StepCheckout>
        <StepItem>
          <StepNumber active>1</StepNumber>
          <StepTitle active>Delivery</StepTitle>
        </StepItem>
        <RightIcon>
          <ArrowForwardIosIcon />
        </RightIcon>
        <StepItem>
          <StepNumber active>2</StepNumber>
          <StepTitle active>Payment</StepTitle>
        </StepItem>

        <RightIcon>
          <ArrowForwardIosIcon />
        </RightIcon>
        <StepItem>
          <StepNumber>3</StepNumber>
          <StepTitle>Finish</StepTitle>
        </StepItem>
      </StepCheckout>
      <Back>
        <LeftIcon>
          <ArrowBackIcon />
        </LeftIcon>
        <BackTitle>Back to delivery</BackTitle>
      </Back>

      <ContentWrapper>
        <Content>
          <Shipment />
          <PaymentMethod />
        </Content>
        <SummaryPayment />
      </ContentWrapper>
    </PaymentWrapper>
  );
};

export default Payment;
