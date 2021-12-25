import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isGoSend, setIsGoSend] = useState(true);
  const [isJne, setIsJne] = useState(false);
  const [isPersonalCourier, setIsPersonalCourier] = useState(false);
  const [isEWallet, setIsEWallet] = useState(true);
  const [isBankTransfer, setIsBankTransfer] = useState(false);
  const [isVirtualAccount, setIsVirtualAccount] = useState(false);

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

  const currencyFormatter = (number) => new Intl.NumberFormat().format(number);

  return (
    <AppContext.Provider
      value={{
        isGoSend,
        setIsGoSend,
        isJne,
        setIsJne,
        isPersonalCourier,
        setIsPersonalCourier,
        goSendActive,
        jneActive,
        personalCourierActive,
        isEWallet,
        setIsEWallet,
        isBankTransfer,
        setIsBankTransfer,
        isVirtualAccount,
        setIsVirtualAccount,
        eWalletActive,
        bankTransferActive,
        virtualAccountActive,
        currencyFormatter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
