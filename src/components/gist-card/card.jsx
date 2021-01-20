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
  background: #fcea4a;
  display: grid;
  grid-template-rows: repeat(2, min-content);
  justify-items: center;
  grid-gap: 20px;
  padding: 40px;
  border-radius: 5px;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 90%,
    60% 90%,
    50% 100%,
    40% 90%,
    0 90%
  );
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
  @media only screen and (max-width: 1200px) {
    font-size: 20px;
    line-height: 20px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 18px;
    line-height: 25px;
  }

  @media only screen and (max-width: 750px) {
    font-size: 16px;
    line-height: 25px;
  }
`;
const Name = styled(SmText)`
  font-size: 14px;
  color: #fff;
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
