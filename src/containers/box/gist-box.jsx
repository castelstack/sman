import React from "react";
import { HeadText } from "../../constant/styles";
import Network from "../../images/networkk.svg";
import Button from "../../components/button/button";
import styled from "styled-components";

const Container = styled.div`
  margin: 76px 99px;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
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
  font-weight: 600;
  font-size: 20px;
  line-height: 149.9%;
 

  text-transform: capitalize;

  color: #4d4b4b;
`;

const ImageBox = styled.div`
display: flex;
justify-content: end;`;
const Image = styled.img`
margin-left: auto;
color: black;`

const Buttons = styled.div`
  display: grid;
  grid-template-columns: min-content;
  justify-content: center;
`;



const GistBox = () => {
  return (
    <Container>
      <Content>
        <Info>
          <HeadText>Stingy Men Gather Here To Gist
Their Experience With Women.</HeadText>
          <InfoText>
            
            <Text>
            You fit join, you fit just read, laugh & share!
            </Text>
          </InfoText>
          <Buttons>
            
            <Button value='Read Gist' big/>
          </Buttons>
        </Info>
        <ImageBox>
          <Image src={Network} alt='Stingy Network' />
        </ImageBox>
      </Content>
    </Container>
  );
};

export default GistBox;
