import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
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

  const currencyFormatter = (number) => new Intl.NumberFormat().format(number);

  return (
    <AppContext.Provider
      value={{
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
