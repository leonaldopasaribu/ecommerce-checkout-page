import React, { useState } from "react";

import {
  ShipmentWrapper,
  TitleWrapper,
  Title,
  TitleBorderBottom,
  ShipmentList,
  ShipmentItem,
  ShipmentItemActive,
  ShipmentItemTitle,
  ShipmentItemValue,
} from "./styles";

const Shipment = () => {
  const [isGoSend, setIsGoSend] = useState(true);
  const [isJne, setIsJne] = useState(false);
  const [isPersonalCourier, setIsPersonalCourier] = useState(false);

  const goSendActive = () => {
    setIsGoSend(true);
    setIsJne(false);
    setIsPersonalCourier(false);
  };

  const jneActive = () => {
    setIsGoSend(false);
    setIsJne(true);
    setIsPersonalCourier(false);
  };

  const personalCourierActive = () => {
    setIsGoSend(false);
    setIsJne(false);
    setIsPersonalCourier(true);
  };

  return (
    <ShipmentWrapper>
      <TitleWrapper>
        <Title>Shipment</Title>
        <TitleBorderBottom />
      </TitleWrapper>

      <ShipmentList>
        {isGoSend ? (
          <ShipmentItemActive onClick={goSendActive}>
            <ShipmentItemTitle>GO-SEND</ShipmentItemTitle>
            <ShipmentItemValue>15,000</ShipmentItemValue>
          </ShipmentItemActive>
        ) : (
          <ShipmentItem onClick={goSendActive}>
            <ShipmentItemTitle>GO-SEND</ShipmentItemTitle>
            <ShipmentItemValue>15,000</ShipmentItemValue>
          </ShipmentItem>
        )}

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
        )}
      </ShipmentList>
    </ShipmentWrapper>
  );
};

export default Shipment;
