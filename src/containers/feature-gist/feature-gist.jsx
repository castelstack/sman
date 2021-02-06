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

  animation: color-me-in 5s infinite;


// @keyframes color-me-in {
//   0% {
//     background-image: radial-gradient(circle, #ff000f, #e21722, #c3232d, #a42b32, #843035);
//   }
//   50% {
//     background-image: linear-gradient(to right, #843035, #a42b32, #c3232d, #e21722, #ff000f);
//   }
//   100% {
//     background-image: linear-gradient(to left, #843035, #a32b32, #c1232c, #de1622, #fa000f);
//   }
// }
  @media only screen and (max-width: 750px) {
    grid-gap: 20px;
    padding: 99px 50px;
    justify-content: center;
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
  color: #18191F;
`;

const ReadGistButton = styled(Button)`
  color: #FCEA4A;
  border: solid 1px #FCEA4A;
  background: none;
  
transition: 0.25s;
&:hover,
&:focus {
  color: black;
  box-shadow: inset 0 -3.25em 0 0 #FCEA4A  ;
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
