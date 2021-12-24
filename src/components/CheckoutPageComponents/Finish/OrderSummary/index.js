import React from "react";

import {
  OrderSummaryWrapper,
  TitleWrapper,
  Title,
  TitleBorderBottom,
  OrderId,
  OrderIdTitle,
  OrderIdDescription,
  HomepageLink,
  BackIcon,
  HomepageLinkTitle,
} from "./styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const OrderSummary = () => {
  return (
    <OrderSummaryWrapper>
      <TitleWrapper>
        <Title>Thank you</Title>
        <TitleBorderBottom />
      </TitleWrapper>

      <OrderId>
        <OrderIdTitle>Order ID : XXKYB</OrderIdTitle>
        <OrderIdDescription>
          Your order will be delivered today with GO-SEND
        </OrderIdDescription>
      </OrderId>

      <HomepageLink>
        <BackIcon>
          <ArrowBackIcon />
        </BackIcon>
        <HomepageLinkTitle>Go to homepage</HomepageLinkTitle>
      </HomepageLink>
    </OrderSummaryWrapper>
  );
};

export default OrderSummary;
