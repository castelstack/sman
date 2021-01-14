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
  background: rgb(226, 225, 225);
  display: grid;
  grid-template-rows: repeat(2, min-content);
  justify-items: center;
  grid-gap: 20px;
  padding: 40px;
`;

const Profile = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  justify-items: center;
`;

const Category = styled(MedText)`
  font-size: 24px;
`;
const Gist = styled(SmText)`
  font-size: 14px;
`;
const Name = styled(SmText)`
  font-size: 14px;
`;
const Card = ({ title, gist, name }) => {
  return (
    <Container>
      <Content>
        <Category>{title}</Category>
        <Gist>{gist}</Gist>
      </Content>
      <Profile>
        <Avatar>H</Avatar>
        <Name>{name}</Name>
      </Profile>
    </Container>
  );
};

export default Card;
