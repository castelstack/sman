import React from "react";
import { HeadText, SmText } from "../../constant/styles";
import GistCard from "../../components/gist-card/gist-card";
import Button from "../../components/button/button";
import { Link } from "react-router-dom";
import bg from "../../images/gbg.svg";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(4, min-content);
  grid-gap: 30px;
  padding: 48px 99px;

  justify-items: center;
  background-image: url(${bg});


  @media only screen and (max-width: 750px) {
    grid-gap: 20px;
    padding: 99px 50px;
    justify-content: center;
    background: #843035;
  }
`;

const Heading = styled(HeadText)`
  color: #fff;
`;
const SubHead = styled(SmText)`
  color: #fff;
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  justify-content: center;
  grid-gap: 30px;
`;

const DropGistButton = styled(Button)`
  color: #18191f;
`;

const ReadGistButton = styled(Button)`
  color: #fcea4a;
  border: solid 1px #fcea4a;
  background: none;

  transition: 0.25s;
  &:hover,
  &:focus {
    color: black;
    box-shadow: inset 0 -3.25em 0 0 #fcea4a;
  }
`;
const FeatureGist = () => {
  return (
    <Container>
      <Heading>Stingy Men Gists</Heading>
      <SubHead>
        Stingy Men don dey drop gists! you fit read and pass or join them{" "}
      </SubHead>
      <div>
        <GistCard />
      </div>
      <Buttons>
        <Link to='/write-gist'>
          <DropGistButton value='Drop Your Gist' big />
        </Link>
        <Link to='/gist'>
          <ReadGistButton value='Read Gist' big />
        </Link>
      </Buttons>
    </Container>
  );
};

export default FeatureGist;
