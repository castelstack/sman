import React from "react";
import { MedText, SmText } from "../../constant/styles";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AvatarP from "../../images/avatar.svg";
import ShowMoreText from "react-show-more-text";
import "./giststyle.css";

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  justify-items: center;
  width: 100%;
  grid-gap: 20px;
`;

const Content = styled.div`
width: 20rem;
  background: #fcea4a;
  display: grid;
  grid-template-rows: repeat(2, min-content);
  justify-items: center;
  grid-gap: 20px;
  padding: 2px 2px 50px 2px;
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
  

   @media only screen and (max-width: 650px) {
    padding: 20px .5rem 50px .5rem;
  }
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
  font-size: 15px;
  line-height: 25px;
  padding: .5rem 0;
  @media only screen and (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media only screen and (max-width: 750px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
const Name = styled(SmText)`
  font-size: 14px;
  color: #fff;
`;
const executeOnClick = (isExpanded) => {
  return isExpanded;
};
const Card = ({ title, gist, name }) => {
  return (
    <Container>
      <Content>
        <Category>{title}</Category>
        <ShowMoreText
          /* Default options */
          lines={3}
          more=">>>"
          less="<<<"
          className="content"
          anchorClass="my-anchor-css-class"
          onClick={executeOnClick}
          expanded={false}
        >
          <Gist>{gist}</Gist>
        </ShowMoreText>
      </Content>
      <Profile>
        <Avatar src={AvatarP} alt='profile'/>
        <Name>{name}</Name>
      </Profile>
    </Container>
  );
};

export default Card;
