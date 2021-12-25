import React, { useContext } from "react";
import { useDispatch } from "react-redux";

import {
  ShipmentWrapper,
  TitleWrapper,
  Title,
  TitleBorderBottom,
  ShipmentList,
  ShipmentItem,
  // ShipmentItemActive,
  ShipmentItemTitle,
  ShipmentItemValue,
} from "./styles";

import { AppContext } from "../../../../context/AppContext";

import { CHECKOUT_DROPSHIPPING_FEE } from "../../../../redux/actionTypes";

const Shipment = ({ shipmentData }) => {
  const dispatch = useDispatch();

  const {
    // isGoSend,
    // isJne,
    // isPersonalCourier,
    // goSendActive,
    // jneActive,
    // personalCourierActive,
    currencyFormatter,
  } = useContext(AppContext);

  const shipmentActive = (data) => {
    // console.log(data);
    dispatch({
      type: CHECKOUT_DROPSHIPPING_FEE,
      payload: data,
    });
  };

  return (
    <ShipmentWrapper>
      <TitleWrapper>
        <Title>Shipment</Title>
        <TitleBorderBottom />
      </TitleWrapper>

      <ShipmentList>
        {shipmentData.map((data, i) => (
          <ShipmentItem key={i} onClick={() => shipmentActive(data)}>
            <ShipmentItemTitle>{data.shipmentName}</ShipmentItemTitle>
            <ShipmentItemValue>
              {currencyFormatter(data.cost)}
            </ShipmentItemValue>
          </ShipmentItem>
        ))}

        {/* <ShipmentItem onClick={goSendActive}>
          <ShipmentItemTitle>GO-SEND</ShipmentItemTitle>
          <ShipmentItemValue>15,000</ShipmentItemValue>
        </ShipmentItem>

        {isJne ? (
          <ShipmentItemActive onClick={jneActive}>
            <ShipmentItemTitle>JNE</ShipmentItemTitle>
            <ShipmentItemValue>9,000</ShipmentItemValue>
          </ShipmentItemActive>
        ) : (
          <ShipmentItem onClick={jneActive}>
            <ShipmentItemTitle>JNE</ShipmentItemTitle>
            <ShipmentItemValue>9,000</ShipmentItemValue>
          </ShipmentItem>
        )}

        {isPersonalCourier ? (
          <ShipmentItemActive onClick={personalCourierActive}>
            <ShipmentItemTitle>Personal Courier</ShipmentItemTitle>
            <ShipmentItemValue>29,000</ShipmentItemValue>
          </ShipmentItemActive>
        ) : (
          <ShipmentItem onClick={personalCourierActive}>
            <ShipmentItemTitle>Personal Courier</ShipmentItemTitle>
            <ShipmentItemValue>29,000</ShipmentItemValue>
          </ShipmentItem>
        )} */}
      </ShipmentList>
    </ShipmentWrapper>
  );
};

export default Shipment;
