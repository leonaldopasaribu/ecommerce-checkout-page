import styled from "styled-components";

export const DeliveryDetailsWrapper = styled.div`
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
`;

export const StepItem = styled.div`
  display: flex;
  align-items: center;
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
`;

export const StepTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #ff8a00;
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

export const TitleWrapper = styled.div`
  width: fit-content;
  margin-top: 24px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  font-style: normal;
  font-family: "Montserrat" serif;
  line-height: 44px;
  color: #ff8a00;
`;

export const TitleBorderBottom = styled.div`
  border-bottom: 8px solid #eeeeee;
  margin-top: -40px;
`;
