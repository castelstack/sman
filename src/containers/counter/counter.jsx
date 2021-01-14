import React from "react";
import { SmText } from "../../constant/styles";
import Gist from "../../images/gist.svg";
import styled from "styled-components";

const Container = styled.div`
  padding: 65px;
  background: #fffdee;
`;

const CounterBox = styled.div`
display: grid;
grid-template-columns: repeat(3, min-content);
grid-gap: 5px;
justify-content: space-between;
padding: 18px 150px;
background: #fff;
`;
const Counters = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
`;
const Count = styled.h1`
  font-family: Manrope;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 74px;

  color: #18191f;
`;

const CountInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 2px;
  align-items: center;
`;
const Icon = styled.img``;
const Text = styled(SmText)`
line-height: 9px;
`;
const Counter = () => {
  return (
    <Container>
      <CounterBox>
        <Counters>
          <Count>234</Count>
          <CountInfo>
            <Icon src={Gist} />
            <Text>Stingy Men</Text>
          </CountInfo>
        </Counters>
        <Counters>
          <Count>234</Count>
          <CountInfo>
            <Icon src={Gist} />
            <Text>Stingy Men</Text>
          </CountInfo>
        </Counters>
        <Counters>
          <Count>234</Count>
          <CountInfo>
            <Icon src={Gist} />
            <Text>Stingy Men</Text>
          </CountInfo>
        </Counters>
      </CounterBox>
    </Container>
  );
};

export default Counter;
