import React from "react";
import { HeadText } from "../../constant/styles";
import Button from "../../components/button/button";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import Upload from "../../components/upload/upload";

const Container = styled.div`
  margin: 20px 110px;
  display: grid;
  grid-template-columns: 1fr;
  @media only screen and (max-width: 800px) {
    margin: 20px 80px;
  }

  @media only screen and (max-width: 600px) {
    margin: 20px 60px;
  }

  @media only screen and (max-width: 400px) {
    margin: 10px 20px;
  }
`;

const WriteIn = styled.div`
  margin-bottom: 10px;
`;

const HeadBox = styled.div`
  display: flex;

  align-items: center;
  padding: 50px 0;

  @media only screen and (max-width: 600px) {
    padding: 15px 0;
  }

  @media only screen and (max-width: 400px) {
    padding: 16px 0;
  }
`;

const Heading = styled(HeadText)`
  font-size: 45px;
  line-height: 61px;

  color: #c4c4c4;

  @media only screen and (max-width: 1000px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 15px;
  }
`;
const Post = styled(Button)`
  margin: 30px 0;
  align-self: flex-end;
`;

// create new rules
const WriteGist = () => {
  return (
    <Container>
      <HeadBox>
        <Heading>Write Your Stingy Gist</Heading>
      </HeadBox>
      <WriteIn>
        <TextField
          id='outlined-multiline-static'
          label='Write your rules'
          multiline
          rows={20}
          fullWidth
          defaultValue='Your Stingy Rule'
          variant='outlined'
        />
      </WriteIn>
      <Upload border />
      <div>

      <Post value='Post' />
      </div>
    </Container>
  );
};

export default WriteGist;
