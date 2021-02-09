import React from "react";
import { HeadText, SmText } from "../../constant/styles";
import styled from "styled-components";
import Loader from "react-loader-spinner";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 50px;
`;

const Heading = styled(HeadText)`
  color: #fff;
  font-size: 35px;

  @media only screen and (max-width: 1200px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 900px) {
    font-size: 22px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
`;
const SubHeading = styled(SmText)`
  color: #fff;
  font-size: 13px;
  font-weight: 400;
`;

const Spinner = () => {
  return (
    <Container>
      <Heading>Generating Your Unique ID</Heading>
      <SubHeading>Upload your details for preview</SubHeading>
      <SpinnerContainer>
        <Loader type='Circles' color='#fff' height={100} width={100} />
      </SpinnerContainer>
    </Container>
  );
};

export default Spinner;
