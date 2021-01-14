import React from "react";
import { MedText, SmText } from "../../constant/styles";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";


const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  justify-items: center;
  width: 330px;
  grid-gap: 20px;

  
 
`;

const Content = styled.div`
background: #c4c4c4;
display: grid;
  grid-template-rows: repeat(2, min-content);
  justify-items: center;
  grid-gap: 20px;
  padding: 40px;

  &::before, &::after {
    box-sizing: inherit;
    position: absolute;
    content: '';
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }
  
  &::after {
    bottom: 0;
    right: 0;
  }
  
  &::before {
    top: 0;
    left: 0;
  }
  
  &:hover::before, &:hover::after {
    width: 100%;
    height: 100%;
  }
  
  &:hover::before {
    border-top-color: #FCEA4A;
    border-right-color: #FCEA4A;
    transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
  }
  
  &:hover::after {
    border-bottom-color: #FCEA4A;
    border-left-color: #FCEA4A;
    transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s, height 0.3s ease-out 1s;
  }

`;

const Category = styled(MedText)`
  font-size: 24px;
`;
const Gist = styled(SmText)`
  font-size: 14px;
`;

const Card = ({title, gist}) => {
  return (
    <Container>
      <Content>
              <Category>{title}</Category>
              <Gist>{gist}</Gist>
      </Content>
      <Avatar>H</Avatar>
    </Container>
  );
};

export default Card;
