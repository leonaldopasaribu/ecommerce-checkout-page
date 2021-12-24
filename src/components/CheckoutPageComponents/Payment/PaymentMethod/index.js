import React, { useState } from "react";

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

const PaymentMethod = () => {
  const [isEWallet, setIsEWallet] = useState(true);
  const [isBankTransfer, setIsBankTransfer] = useState(false);
  const [isVirtualAccount, setIsVirtualAccount] = useState(false);

  const eWalletActive = () => {
    setIsEWallet(true);
    setIsBankTransfer(false);
    setIsVirtualAccount(false);
  };

  const bankTransferActive = () => {
    setIsEWallet(false);
    setIsBankTransfer(true);
    setIsVirtualAccount(false);
  };

  const virtualAccountActive = () => {
    setIsEWallet(false);
    setIsBankTransfer(false);
    setIsVirtualAccount(true);
  };

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
