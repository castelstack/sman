import React from "react";
import { HeadText } from "../../constant/styles";
import Network from "../../images/network.png";
import Button from "../../components/button/button";
import styled from "styled-components";

const Container = styled.div`
  margin: 36px 99px;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-gap: 40px;
`;
const InfoText = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  list-style: none;
`;

const TextHead = styled.li`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 149.9%;
  /* or 42px */

  text-transform: capitalize;

  color: #4d4b4b;
`;

const Text = styled.li`
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 149.9%;
 

  text-transform: capitalize;

  color: #4d4b4b;
`;

const ImageBox = styled.div`
display: flex;
justify-content: end;`;
const Image = styled.img`
margin-left: auto;`;
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
            <Button value='Generate ID' big/>
            <Button value='Read Gist' choco big/>
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
