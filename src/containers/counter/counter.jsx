import React from "react";
import { SmText } from "../../constant/styles";
import Gist from "../../images/gist.svg";
import styled from "styled-components";

const Container = styled.div`
  padding: 65px;
  background: #fffdee;


@media only screen and (max-width: 800px) {
  padding: 65px 50px;

}

@media only screen and (max-width: 600px) {
  padding: 65px 40px;

}

@media only screen and (max-width: 400px) {
  padding: 65px 20px;

}
`;

const CounterBox = styled.div`
display: grid;
grid-template-columns: repeat(3, min-content);
grid-gap: 5px;
justify-content: space-between;
padding: 18px 150px;
background: #fff;

@media only screen and (max-width: 1200px) {
 
  padding: 18px 80px;
}

@media only screen and (max-width: 800px) {
  padding: 18px 50px;

}

@media only screen and (max-width: 600px) {
  padding: 18px 20px;

}

@media only screen and (max-width: 400px) {
  padding: 18px 10px;

}
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
  @media only screen and (max-width: 1200px) {
    font-size: 35px;

  }

  @media only screen and (max-width: 800px) {
    font-size: 30px;

  }

  @media only screen and (max-width: 600px) {
    font-size: 25px;

  }
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
@media only screen and (max-width: 1200px) {
  font-size: 15px;

}


@media only screen and (max-width: 800px) {
  font-size: 13px;

}

@media only screen and (max-width: 600px) {
  font-size: 10px;

}
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
