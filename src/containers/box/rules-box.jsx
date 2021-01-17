import React from "react";
import { HeadText } from "../../constant/styles";
import Rules from "../../images/rules.png";
import Button from "../../components/button/button";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 76px 99px;

  @media only screen and (max-width: 1200px) {
    margin: 76px 99px;
  }

  @media only screen and (max-width: 900px) {
    margin: 66px 60px;
  }

  @media only screen and (max-width: 800px) {
    margin: 56px 40px;
  }
  @media only screen and (max-width: 620px) {
    margin: 46px 20px;
  }
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-gap: 40px;

   
  @media only screen and (max-width: 500px) {
    grid-gap: 20px;
  }
  @media only screen and (max-width: 400px) {
    grid-gap: 10px;
  }
`;
const InfoText = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  list-style: none;
`;

const Text = styled.li`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 149.9%;

  text-transform: capitalize;

  color: #4d4b4b;

  @media only screen and (max-width: 900px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 620px) {
    font-size: 14px;
  }

  
  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: end;
`;
const Image = styled.img`
  margin-left: auto;
  color: black;

  @media only screen and (max-width: 900px) {
    width: 20rem;
  }

  @media only screen and (max-width: 800px) {
    width: 15rem;
  }
  @media only screen and (max-width: 620px) {
    width: 14rem;
  }
  @media only screen and (max-width: 500px) {
    width: 10rem;
  }
  
`;

// box contain only details of page and write rule button
const RulesBox = () => {
  // let { url, path } = useRouteMatch();

  return (
    <Container>
      <Content>
        <Info>
          <HeadText>Read Our Rules & Regulations!</HeadText>
          <InfoText>
            <Text>You can add yours if you think we skipped something</Text>
          </InfoText>
          <Link to='/write-rules'>
            <Button value='Write Yours' big />
          </Link>
        </Info>
        <ImageBox>
          <Image src={Rules} alt='Stingy Network' />
        </ImageBox>
      </Content>
     
    </Container>
  );
};

export default RulesBox;
