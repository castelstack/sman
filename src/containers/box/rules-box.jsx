import React from "react";
import { HeadText } from "../../constant/styles";
import Rules from "../../images/rules.png";
import Button from "../../components/button/button";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 76px 99px;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  justify-content: end;
`;
const Image = styled.img`
  margin-left: auto;
  color: black;
`;

// box contain only details of page and write rule button
const RulesBox = () => {
  // let { url, path } = useRouteMatch();

  return (
    <Container>
      <Content>
        <Info>
          <HeadText>Read Our Rules & Regulations!</HeadText>
          <InfoText>
            <Text>You can add yours if you think we skipped something</Text>
          </InfoText>
          <Link to='/write-rules'>
            <Button value='Write Yours' big />
          </Link>
        </Info>
        <ImageBox>
          <Image src={Rules} alt='Stingy Network' />
        </ImageBox>
      </Content>
     
    </Container>
  );
};

export default RulesBox;
