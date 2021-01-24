import React from "react";
import { HeadText, MedText } from "../../constant/styles";
import TextField from "@material-ui/core/TextField";
import { useAlert } from "react-alert";
import EmailIcon from "@material-ui/icons/Email";
import styled from "styled-components";
import Button from "../../components/button/button";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: #843035;
  padding: 150px 80px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  justify-items: center;
`;

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
const ForgotPass = styled(Button)``;

const InputEmail = () => {
  const alert = useAlert();
  const handleClick = () => {
    console.log("sent passwor reset");
    alert.show("Recovery email sent");
  };
  return (
    <Container>
      <EmailIcon style={{ color: "#FCEA4A", width: "4rem", height: "4rem" }} />
      <HdText>Recovery email</HdText>
      <Text>Input your email for recovery code.</Text>
      <TextField
        id='standard-basic'
        label='Email'
        type='email'
        variant='filled'
      />

      <Link to='/password-reset' style={{ color: "#843035" }}>
        <ForgotPass onClick={handleClick} value='Confirm code' />
      </Link>
    </Container>
  );
};

export default InputEmail;
