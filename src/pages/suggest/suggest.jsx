import React from "react";
import Button from "../../components/button/button";
import { MedText, SmText } from "../../constant/styles";
import styled from "styled-components";
import { TextGist } from "../../containers/write/write.style";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
grid-gap:1rem;
  padding: 3rem 6rem;
  @media only screen and (max-width: 650px) {
    padding: 54px 20px;
  }
`;
const Suggest = () => {
  return (
    <Container>
      <MedText> Suggestion</MedText>
      <SmText>
        Send a gists tag, new category or new idea for our association
      </SmText>
      <TextGist placeholder='Your suggestion' />
      <Button value='Send' />
    </Container>
  );
};

export default Suggest;
