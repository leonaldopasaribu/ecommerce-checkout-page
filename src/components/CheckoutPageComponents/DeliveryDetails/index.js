import React from "react";

import {
  DeliveryDetailsWrapper,
  StepCheckout,
  StepItem,
  StepNumber,
  StepTitle,
  RightIcon,
  TitleWrapper,
  Title,
  TitleBorderBottom,
  Back,
  BackTitle,
  LeftIcon,
  Content,
} from "./styles";

import FormDeliveryDetails from "./FormDeliveryDetails";
import Summary from "./Summary";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const DeliveryDetails = () => {
  return (
    <DeliveryDetailsWrapper>
      <StepCheckout>
        <StepItem>
          <StepNumber active>1</StepNumber>
          <StepTitle active>Delivery</StepTitle>
        </StepItem>
        <RightIcon>
          <ArrowForwardIosIcon />
        </RightIcon>
        <StepItem>
          <StepNumber>2</StepNumber>
          <StepTitle>Payment</StepTitle>
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
        <BackTitle>Back to cart</BackTitle>
      </Back>

      <TitleWrapper>
        <Title>Delivery details</Title>
        <TitleBorderBottom />
      </TitleWrapper>

      <Content>
        <FormDeliveryDetails />
        <Summary />
      </Content>
    </DeliveryDetailsWrapper>
  );
};

export default DeliveryDetails;
