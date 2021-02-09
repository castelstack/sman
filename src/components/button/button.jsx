import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  width: ${(props) => (props.big ? "235px" : "139px")};
  height: ${(props) => (props.big ? "58px" : "38px")};

  cursor: pointer;
  border: ${(props) => (props.choco ? "solid 1px #843035" : "none")};
  background: ${(props) => (props.choco ? "none" : "#FCEA4A")};

  border-radius: 10rem;
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => (props.big ? "20px" : "15px")};
  line-height: 33px;
  outline: none;
  color: ${(props) => (props.choco ? "#843035" : "#4D4B4B")};

  @media only screen and (max-width: 1200px) {
    width: 200px;
    height: 40px;
    font-size: 18px;
  }

  @media only screen and (max-width: 800px) {
    width: 150px;
    height: 42px;
    font-size: 12px;
  }

  @media only screen and (max-width: 600px) {
    width: 120px;
    height: 40px;
    font-size: 13.5px;
  }

  &:hover {
    box-shadow: 5px 8px 9px -10px rgba(0, 0, 0, 0.4);
    transform: translateY(-0.6px);
  }
  &:active {
    transform: translateY(0.6px);
  }
`;

const Button = ({ onClick, to, value, ...props }) => {
  return (
    <div>
      <CustomButton onClick={onClick} to={to} {...props}>
        {value}
      </CustomButton>
    </div>
  );
};

export default Button;
