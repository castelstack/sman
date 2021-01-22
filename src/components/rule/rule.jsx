import React from "react";
import { SmText, HeadText } from "../../constant/styles";

import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #e5e5e5;
  padding: 20px;
  border-radius: 5px;


  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);


&:hover {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  animation-name: example;
  animation-duration: 0.25s;
  border-left: 8px solid #843035;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}


  @keyframes example {
      0%   {border-left: 2px solid #ffffff;}
      25%  {border-left: 3px solid #ffe6e6;}
      50%  {border-left: 4px solid #843035;}
      100% {border-left: 5px solid #843035;}
  }
  @media only screen and (max-width: 400px) {
    padding: 10px;
  }
`;

const RuleBox = styled(SmText)`
  font-size: 18px;
  line-height: 37px;

  color: #727373;

  @media only screen and (max-width: 800px) {
    font-size: 16px;
    line-height: 30px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 28px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 12px;
    line-height: 25px;
  }
`;

const Number = styled(HeadText)`
  width: 84px;
  height: 48px;

  background: #843035;
  border-radius: 7px;

  font-size: 28px;
  line-height: 25px;

  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
    font-size: 25px;
    line-height: 22px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 20px;
    line-height: 20px;
    width: 64px;
    height: 45px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 16px;
    line-height: 18px;
    width: 54px;
    height: 40px;
  }
`;

const Rule = ({ number, rule }) => {
  return (
    <Container>
      <Number>NO {number}</Number>
      <RuleBox>{rule}</RuleBox>
    </Container>
  );
};

export default Rule;
