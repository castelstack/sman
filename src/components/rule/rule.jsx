import React from "react";
import {  SmText, HeadText } from "../../constant/styles";

import styled from "styled-components";

const Container = styled.div`
border: 1px solid #E5E5E5;
padding: 20px;
border-radius: 5px;`;

const RuleBox = styled(SmText)`
font-size: 18px;
line-height: 37px;

color: #727373;
`;

const Number = styled(HeadText)`
  width: 84px;
  height: 48px;
  left: 127px;
  top: 818px;

  background: #843035;
  border-radius: 7px;

  font-size: 28px;
  line-height: 25px;

  color: #ffffff;

  display:  flex;
  justify-content: center;
  align-items: center;
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
