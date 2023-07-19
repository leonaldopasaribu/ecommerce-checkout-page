import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import {
  DeliveryDetailsWrapper,
  StepCheckout,
  StepItem,
  StepNumber,
  StepTitle,
  RightIcon,
  HeadingDelivery,
  TitleWrapper,
  Title,
  TitleBorderBottom,
  CheckboxDropshipper,
  DropshipperTitle,
  Back,
  BackTitle,
  LeftIcon,
  ContentWrapper,
  Content,
} from "./styles";

import FormDeliveryDetails from "./form-delivery-details";
import SummaryDelivery from "./summary-delivery";

import { CHECKOUT_DROPSHIPPING_FEE } from "redux/actionTypes";

const DeliveryDetails = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);

    if (!checked) {
      dispatch({ type: CHECKOUT_DROPSHIPPING_FEE, payload: 5900 });
    } else {
      dispatch({ type: CHECKOUT_DROPSHIPPING_FEE, payload: 0 });
    }
  };

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

      <ContentWrapper>
        <Content>
          <HeadingDelivery>
            <TitleWrapper>
              <Title>Delivery details</Title>
              <TitleBorderBottom />
            </TitleWrapper>
            <CheckboxDropshipper>
              <div className="checkbox bounce">
                <input type="checkbox" onChange={handleChange} />
                <svg viewBox="0 0 21 21">
                  <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
              </div>
              <DropshipperTitle>Send as dropshipper</DropshipperTitle>
            </CheckboxDropshipper>
          </HeadingDelivery>
          <FormDeliveryDetails />
        </Content>
        <SummaryDelivery />
      </ContentWrapper>
    </DeliveryDetailsWrapper>
  );
};

export default DeliveryDetails;
