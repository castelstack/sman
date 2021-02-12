import React from "react";
import { HeadText, MedText } from "../../constant/styles";
import Button from "../button/button";
import message from "../../constant/response";
import styled from "styled-components";
import axios from "axios";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import { useFormik } from "formik";
import { Alert, TYPE } from "../../components/alert";
import { InputAdornment, TextField } from "@material-ui/core";
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
const Container = styled.div`
  background: #fff;
  padding: 140px 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  justify-items: center;
  justify-content: center;
  text-align: center;
`;

const HdText = styled(HeadText)`
  font-size: 32px;
  color: #843035;

  @media only screen and (max-width: 800px) {
    font-size: 30px;
  }
`;

const Text = styled(MedText)`
  font-size: 18px;
  color: #843035;

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


export const InputField = styled.input`
  background: #843035;
  padding: 15px 45px;

  font-size: 16px;
  line-height: 24px;

  /* for box */
  width: 100%;
  height: 20px;
  outline: 0;
  color: white;
  border-radius: 5px;
  border: none;
  border: solid 2px white;

  &::placeholder {
    color: white;
  }
  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  &:focus {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const Email = styled(ConfirmationNumberIcon)`

  color: #000;
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  justify-items: center;
`;
const ResetPassword = ({ history }) => {
  const URL = "https://smanhq.herokuapp.com/";

  const formik = useFormik({
    initialValues: {
      token: "",
    },
    onSubmit: (values) => {
      axios
        .post(`${URL}api/v1/users/verifyResetPasswordToken`, formik.values, {
          withCredentials: true,
        })
        .then((res, req) => {
          if (res.data.status === "SUCCESS") {
            Alert(res.data.message, TYPE.SUCCESS);

            return history.push("/set-new-password");
          }
        })
        .catch((err) => {
          // err msg
          Alert(message(err), TYPE.ERROR);
        });
    },
  });
  return (
    <Container>
      <AssignmentReturnedIcon style={{ color: "#843035", width: "4rem", height: "4rem" }} />
      <HdText>Email sent!</HdText>
      <Text>
        Check your mail box for recovery mail containing code. please input the
        code in the text box to recover your mail.
      </Text>
      <Form onSubmit={formik.handleSubmit} method="post">
        
           <TextField
          id="token"
          name="token"
          type="number"
          placeholder="Token"
          onChange={formik.handleChange}
          value={formik.values.token}
          fullWidth
         
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Email />
              </InputAdornment>
            ),
          }}
        />
        
        <Button type="submit" value="Reset password" />
      </Form>
    </Container>
  );
};

export default ResetPassword;
