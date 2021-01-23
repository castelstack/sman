import React from "react";
import { HeadText,MedText } from "../../constant/styles";
import TextField from '@material-ui/core/TextField';
import Button from '../button/button';
import reset from '../../images/reset.svg';
import styled from "styled-components";

const Container = styled.div`
background: #843035;
padding: 150px 80px;
display: grid;
grid-template-columns: 1fr;
grid-gap: 20px;
justify-items: center;`

const HdText = styled(HeadText)`
  font-size: 32px;
  color: #fff;

  @media only screen and (max-width: 800px) {
    font-size: 30px;
  }
  
`;

const Text = styled(MedText)`
  font-size: 20px;
  color: #fff;


  @media only screen and (max-width: 1200px) {
    font-size: 18px;
    text-align: center;
  }

  @media only screen and (max-width: 900px) {
    font-size: 16px;
    
  }

  @media only screen and (max-width: 800px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 12px;
  }
  
`;
const Image = styled.img`
width: 4rem;`

const ResetPassword = () => {
  return (
      <Container>
          <Image src={reset} alt='email_sent' />
          <HdText>Email sent!</HdText>
      <Text>
              Check your mail box for recovery mail containing code. please input the
              code in the text box to recover your mail.
      </Text>
      <TextField id="standard-basic" label="Code" />
<Button value='confirm' />
    </Container>
  );
};

export default ResetPassword;
