import React from "react";

import SummaryFinish from "./SummaryFinish";
import OrderSummary from "./OrderSummary";

import {
  FinishWrapper,
  StepCheckout,
  StepItem,
  StepNumber,
  StepTitle,
  RightIcon,
  Content,
} from "./styles";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Finish = () => {
  return (
    <FinishWrapper>
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
          <StepNumber active>3</StepNumber>
          <StepTitle active>Finish</StepTitle>
        </StepItem>
      </StepCheckout>

      <Content>
        <OrderSummary></OrderSummary>
        <SummaryFinish />
      </Content>
    </FinishWrapper>
  );
};

export default Finish;
