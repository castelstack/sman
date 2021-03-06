import React, { useContext} from "react";
import { HeadText } from "../../constant/styles";
import Network from "../../images/networkB.svg";
import Button from "../../components/button/button";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ActiveContext } from '../../utils/store';

const Container = styled.div`
  margin: 36px 99px;
  @media only screen and (max-width: 750px) {
    margin: 20px 10px;
  }
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 30px;
  }
`;
const Info = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-gap: 40px;

  @media only screen and (max-width: 900px) {
    grid-gap: 5px;
    justify-items: center;
  }
`;
const InfoText = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-gap: 18px;
justify-content: center;
  align-items: start;
  list-style: none;

  @media only screen and (max-width: 900px) {
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
    text-align: center;
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
    text-align: center;
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
  width: 30rem;
  height: 30rem;
  @media only screen and (max-width: 1200px) {
    width: 18rem;
  }

  @media only screen and (max-width: 900px) {
  width:100%
  }

  
`;
const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  grid-gap: 28px;
  justify-content: center;
`;
const ButtonFill = styled(Button)`
transition: 0.25s;
&:hover,
&:focus {
  color: white;
  box-shadow: inset 0 -3.25em 0 0 #843035;
}`
const Box = () => {
  const isActive = useContext(ActiveContext);
 
  return (
    <Container>
      <Content>
        <Info>
          <HeadText style={{textTransform: 'uppercase', fontWeight: '700'}}> Stingy Men Association</HeadText>
          <InfoText>
            <TextHead>Let Me See What I Can Do</TextHead>
            <Text>
            Stingy Men Gather Here To Gist About Their Experience With Women.
            </Text>
          </InfoText>
          <Buttons>
           {
             isActive.userActive ?
             <Link to='/create'>
             <Button value='Generate ID' big />
           </Link> : 
            <Link to='/join'>
            <Button value='Generate ID' big />
          </Link>
           }

            <Link to='/gist'>
              <ButtonFill value='Read Gist' choco big />
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
