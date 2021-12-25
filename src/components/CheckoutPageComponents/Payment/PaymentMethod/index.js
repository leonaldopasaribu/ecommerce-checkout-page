import React, { useContext } from "react";

import {
  PaymentMethodWrapper,
  TitleWrapper,
  Title,
  TitleBorderBottom,
  PaymentList,
  PaymentItem,
  PaymentItemActive,
  PaymentItemTitle,
  PaymentItemValue,
  PaymentItemWallet,
  PaymentItemActiveWallet,
} from "./styles";

import { AppContext } from "../../../../context/AppContext";

const PaymentMethod = () => {
  const {
    isEWallet,
    isBankTransfer,
    isVirtualAccount,
    eWalletActive,
    bankTransferActive,
    virtualAccountActive,
  } = useContext(AppContext);

  return (
    <PaymentMethodWrapper>
      <TitleWrapper>
        <Title>Payment</Title>
        <TitleBorderBottom />
      </TitleWrapper>

      <PaymentList>
        {isEWallet ? (
          <PaymentItemActiveWallet onClick={eWalletActive}>
            <PaymentItemTitle>e-Wallet</PaymentItemTitle>
            <PaymentItemValue>1,500,000 left</PaymentItemValue>
          </PaymentItemActiveWallet>
        ) : (
          <PaymentItemWallet onClick={eWalletActive}>
            <PaymentItemTitle>e-Wallet</PaymentItemTitle>
            <PaymentItemValue>1,500,000 left</PaymentItemValue>
          </PaymentItemWallet>
        )}

        {isBankTransfer ? (
          <PaymentItemActive onClick={bankTransferActive}>
            <PaymentItemTitle>Bank Transfer</PaymentItemTitle>
          </PaymentItemActive>
        ) : (
          <PaymentItem onClick={bankTransferActive}>
            <PaymentItemTitle>Bank Transfer</PaymentItemTitle>
          </PaymentItem>
        )}

        {isVirtualAccount ? (
          <PaymentItemActive onClick={virtualAccountActive}>
            <PaymentItemTitle>Virtual Account</PaymentItemTitle>
          </PaymentItemActive>
        ) : (
          <PaymentItem onClick={virtualAccountActive}>
            <PaymentItemTitle>Virtual Account</PaymentItemTitle>
          </PaymentItem>
        )}
      </PaymentList>
    </PaymentMethodWrapper>
  );
};

export default PaymentMethod;
