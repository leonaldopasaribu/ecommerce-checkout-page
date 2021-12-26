import styled from "styled-components";

export const PaymentWrapper = styled.div`
  position: relative;
`;

export const StepCheckout = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #fffae6;
  border-radius: 35px;
  width: 500px;
  transform: translate(-50%, -50%);
  left: 50%;
  z-index: 1;

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 10px;
  }
`;

export const StepItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const StepNumber = styled.p`
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  width: 30px;
  height: 30px;
  background: ${(props) => (props.active ? "#ff8a00" : "#ffe4b8")};
  color: ${(props) => (props.active ? "#fff" : "#ff8a00")};
  padding: 6px 0 0 10px;
  margin-right: 10px;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    font-weight: 400;
    width: 20px;
    height: 20px;
    padding: 3px 0 0 6px;
  }
`;

export const StepTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #ff8a00;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    font-weight: 400;
  }
`;

export const RightIcon = styled.svg`
  width: 24px;
  height: 24px;
  color: #ff8a00;
`;

export const Back = styled.a`
  display: flex;
  align-items: center;
  padding-top: 30px;
  cursor: pointer;
`;

export const LeftIcon = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;

export const BackTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 300px;
  gap: 30px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
