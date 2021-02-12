import React from "react";
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

const Spinner = () => {
  return (
    <Container>
      <SpinnerContainer>
        <Loader type='Circles' color='#fff' height={100} width={100} />
      </SpinnerContainer>
    </Container>
  );
};

export default Spinner;
