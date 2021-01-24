import React from "react";
import { HeadText, MedText } from "../../constant/styles";
import TextField from "@material-ui/core/TextField";
import Button from "../button/button";

import LockIcon from "@material-ui/icons/Lock";
import { useAlert } from "react-alert";
import styled from "styled-components";

const Container = styled.div`
  background: #843035;
  padding: 150px 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  justify-items: center;
`;

const HdText = styled(HeadText)`
  font-size: 30px;
  color: #fff;

  @media only screen and (max-width: 800px) {
    font-size: 28px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 20px;
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

const NewPassword = () => {
  const alert = useAlert();
  const handleClick = () => {
    alert.show("Password set");
  };
  return (
    <Container>
      <LockIcon style={{ color: "#FCEA4A", width: "4rem", height: "4rem" }} />
      <HdText>New Password</HdText>
      <Text>re-set your password with a strong password</Text>
      <TextField
        id='standard-basic'
        label='New password'
        type='password'
        placeholder='New password'
        variant='filled'
        required
      />
      <TextField
        id='standard-basic'
        label='Confirm password'
        type='password'
        placeholder='Confirm password'
        variant='filled'
        required
      />
      <Button value='Confirm' onClick={handleClick} />
    </Container>
  );
};

export default NewPassword;
