import React, {  useContext } from "react";
import { HeadText, SmText } from "../../constant/styles";
import styled from "styled-components";
import Arrow from "../../images/arrow.svg";
import Temp from "../../images/temp.png";
import Done from "../../images/done.png";
import Bg from "../../images/bg.svg";
import Button from "../../components/button/button";
import { Link } from "react-router-dom";
import { ActiveContext } from '../../utils/store';

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-gap: 40px;
  justify-items: center;
  background: url(${Bg});
  padding: 64px 165px;
  margin: 30px;

  @media only screen and (max-width: 1200px) {
    padding: 64px 5px;
    margin: 30px;
  }

  @media only screen and (max-width: 600px) {
    grid-gap: 30px;
  }

  @media only screen and (max-width: 400px) {
    grid-gap: 10px;
    padding: 64px 0px;
    text-align: center;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  justify-items: center;
  align-items: center;
  padding-bottom: 100px;

  @media only screen and (max-width: 800px) {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3rem;
    justify-content: space-around;
  }
`;
const CardTemplate = styled.img`
  @media only screen and (max-width: 1200px) {
    width: 20rem;
  }

  @media only screen and (max-width: 400px) {
    width: 10rem;
  }
`;
const ArrowImg = styled.img`
  width: 15rem;
  @media only screen and (max-width: 1200px) {
    width: 7rem;
  }

  @media only screen and (max-width: 750px) {
    transform: rotate(270deg);
  }
`;
const CardDone = styled.img`
  @media only screen and (max-width: 1200px) {
    width: 20rem;
  }

  @media only screen and (max-width: 400px) {
    width: 10rem;
  }
`;

const SubHeading = styled(SmText)`
  color: red;

  @media only screen and (max-width: 900px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 14px;
    text-align: center;
    line-height: 15px;
  }
`;

const GetCard = () => {
  const isActive = useContext(ActiveContext);
  
  return (
    <Container>
      <HeadText>Get Your Identity Card Ready</HeadText>
      <SubHeading>
        *Information reaching us is that you have from now to 28 february to get
        yours*
      </SubHeading>
      <CardContainer>
        <CardTemplate src={Temp} />
        <ArrowImg src={Arrow} />
        <CardDone src={Done} />
      </CardContainer>
      {
        isActive.userActive ? 
          <>
      <Link to='/create'>
        <Button value='Generate ID Card' big /> 
            </Link> 
          </> :
          <>
          <Link to='/join'>
          <Button value='Generate ID Card' big /> 
            </Link>
            </>
      }
    </Container>
  );
};

export default GetCard;
