import React, { useContext, useState } from "react";
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

import { CHECKOUT_SHIPPING_FEE } from "../../../../redux/actionTypes";

const Shipment = ({ shipmentData }) => {
  const dispatch = useDispatch();

  const { currencyFormatter } = useContext(AppContext);

  const [active, setActive] = useState(0);

  const shipmentActive = (data, i) => {
    // console.log(data);

    dispatch({
      type: CHECKOUT_SHIPPING_FEE,
      payload: data,
    });
    setActive(i);
  };

  return (
    <ShipmentWrapper>
      <TitleWrapper>
        <Title>Shipment</Title>
        <TitleBorderBottom />
      </TitleWrapper>

      <ShipmentList>
        {shipmentData.map((data, i) => (
          <ShipmentItem
            active={i === active ? i : ""}
            key={i}
            onClick={() => shipmentActive(data, i)}
          >
            <ShipmentItemTitle>{data.shipmentName}</ShipmentItemTitle>
            <ShipmentItemValue>
              {currencyFormatter(data.cost)}
            </ShipmentItemValue>
          </ShipmentItem>
        ))}
      </ShipmentList>
    </ShipmentWrapper>
  );
};

export default Shipment;
