import React from "react";
import { useDispatch, useSelector } from "react-redux";

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

import { finishCheckout } from "../../../../redux/store/actions/checkout.action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const checkout = useSelector((state) => state.checkout);

  const onFinish = () => {
    dispatch(finishCheckout());
  };

  return (
    <OrderSummaryWrapper>
      <TitleWrapper>
        <Title>Thank you</Title>
        <TitleBorderBottom />
      </TitleWrapper>

      <OrderId>
        <OrderIdTitle>Order ID : {checkout.order}</OrderIdTitle>
        <OrderIdDescription>
          Your order will be delivered today with{" "}
          {checkout.summary.shipmentName}
        </OrderIdDescription>
      </OrderId>

      <HomepageLink onClick={() => onFinish()}>
        <BackIcon>
          <ArrowBackIcon />
        </BackIcon>
        <HomepageLinkTitle>Go to homepage</HomepageLinkTitle>
      </HomepageLink>
    </OrderSummaryWrapper>
  );
};

export default OrderSummary;
