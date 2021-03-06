import React, { useContext } from "react";
import { HeadText } from "../../constant/styles";
import Network from "../../images/networkB.svg";
import Button from "../../components/button/button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ActiveContext } from "../../utils/store";

const Container = styled.div`
  margin: 76px 99px;

  @media only screen and (max-width: 1200px) {
    margin: 76px 99px;
  }

  @media only screen and (max-width: 900px) {
    margin: 66px 60px;
  }

  @media only screen and (max-width: 800px) {
    margin: 56px 40px;
  }
  @media only screen and (max-width: 620px) {
    margin: 46px 20px;
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
grid-template-columns:1fr;
grid-gap: 40px;

@media only screen and (max-width: 900px) {
  grid-gap: 5px;
  justify-items: center;
}

`;
const InfoText = styled.ul`
display: grid;
grid-template-columns: 1fr;
align-items: center;
  list-style: none;

  @media only screen and (max-width: 900px) {
   
    justify-items: center;
    grid-gap: 30px;
  }
`;

const Text = styled.li`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 149.9%;

  text-transform: capitalize;

  color: #4d4b4b;

  @media only screen and (max-width: 900px) {
    font-size: 18px;

  }

  @media only screen and (max-width: 800px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 620px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: end;
`;

const Image = styled.img`
  width: 29rem;
  height: 29rem;
  margin-left: auto;
  color: black;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }

`;
const HeadTextt = styled(HeadText)`

@media only screen and (max-width: 900px) {
  text-align: center;
}`

const GistBox = () => {
  const isActive = useContext(ActiveContext);
  return (
    <Container>
      <Content>
        <Info>
          <HeadTextt >Stingy Men Gather Here To Gist
Their Experience About Women.</HeadTextt>
          <InfoText>
            <Text>You fit join, you fit just read, laugh & share!</Text>
          </InfoText>

          {isActive.userActive ? (
            <Link to="/write-gist">
              <Button value="Post Gist" big />
            </Link>
          ) : (
            <Link to="/join">
              <Button value="Post Gist" big />
            </Link>
          )}
        </Info>
        <ImageBox>
          <Image src={Network} alt="Stingy Network" />
        </ImageBox>
      </Content>
    </Container>
  );
};

export default GistBox;
