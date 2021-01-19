import React from "react";
import { HeadText } from "../../constant/styles";
import Network from "../../images/networkB.svg";
import Button from "../../components/button/button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 36px 99px;
  @media only screen and (max-width: 600px) {
    margin: 20px 10px;
  }
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 750px) {
    grid-template-columns: 15rem 1fr;
  }

  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr min-content;
  }

  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 30px;
  }
`;
const Info = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-gap: 40px;

  @media only screen and (max-width: 800px) {
    grid-gap: 20px;
  }
  @media only screen and (max-width: 620px) {
    grid-gap: 10px;
  }

  @media only screen and (max-width: 400px) {
    grid-gap: 5px;
    justify-items: center;
  }
`;
const InfoText = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  list-style: none;

  @media only screen and (max-width: 400px) {
    align-items: center;
  }
`;

const TextHead = styled.li`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 149.9%;
  color: #4d4b4b;

  @media only screen and (max-width: 1200px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 900px) {
    font-size: 22px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 620px) {
    font-size: 18px;
  }
`;

const Text = styled.li`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 149.9%;
  color: #4d4b4b;

  @media only screen and (max-width: 1200px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 900px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 13px;
  }

  @media only screen and (max-width: 400px) {
    text-align: center;
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: end;
`;
const Image = styled.img`
  margin-left: auto;
  @media only screen and (max-width: 1200px) {
    width: 25rem;
  }

  @media only screen and (max-width: 900px) {
    width: 18rem;
  }

  @media only screen and (max-width: 900px) {
    width: 17rem;
  }
`;
const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  grid-gap: 28px;
  justify-content: center;
`;

const Box = () => {
  return (
    <Container>
      <Content>
        <Info>
          <HeadText> Stingy Men Association</HeadText>
          <InfoText>
            <TextHead>Let Me See What I Can Do</TextHead>
            <Text>
              Read Gist Of Orther SMAN Member, Tell Your own Gist And Generate
              SMAN ID Card
            </Text>
          </InfoText>
          <Buttons>
            <Link to='/be-stingy'>
              <Button value='Generate ID' big />
            </Link>

            <Link to='/gist'>
              <Button value='Read Gist' choco big />
            </Link>
          </Buttons>
        </Info>
        <ImageBox>
          <Image src={Network} alt='Stingy Network' />
        </ImageBox>
      </Content>
    </Container>
  );
};

export default Box;
