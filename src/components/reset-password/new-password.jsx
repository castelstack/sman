import React from "react";
import { HeadText, MedText } from "../../constant/styles";
import Button from "../button/button";
import axios from "axios";
import message from "../../constant/response";
import { useFormik } from "formik";
import LockIcon from "@material-ui/icons/Lock";
import { Alert, TYPE } from "../../components/alert";
import styled from "styled-components";
import { IconButton, Input, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";


const Container = styled.div`
  background: #fff;
  padding: 150px 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  justify-items: center;
`;

const HdText = styled(HeadText)`
  font-size: 30px;
  color: #843035;

  @media only screen and (max-width: 800px) {
    font-size: 28px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

const Text = styled(MedText)`
  font-size: 20px;
  color: #843035;;

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

export const Box = styled.div`
  display: flex;

  align-items: center;
  margin-right: 0.7rem;
  justify-self: ${(props) => (props.end ? "flex-end" : "none")};
  color: white;
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

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  justify-items: center;
`;

const NewPassword = ({ history }) => {

  //material ui js func
 
  const [values, setValues] = React.useState({
    password: "",

    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const URL = "https://smanhq.herokuapp.com/";

  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      axios
        .post(`${URL}api/v1/users/resetpassword/`, formik.values, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.status === "SUCCESS") {
            Alert(
              `${res.data.message} LOGIN WITH YOUR NEW PASSWORD`,
              TYPE.SUCCESS
            );

            return history.push("/join");
          }
        })
        .catch((err) => {
          // what now? error message
          Alert(message(err), TYPE.ERROR);
        });
    },
  });

  return (
    <Container>
      <LockIcon style={{ color: "#843035", width: "4rem", height: "4rem" }} />
      <HdText>New Password</HdText>
      <Text>re-set your password with a strong password</Text>
      <Form onSubmit={formik.handleSubmit} method="post">
      <Input
          id='password'
          name='password'
          type={values.showPassword ? "text" : "password"}
          fullWidth
          placeholder='Password'
          label='Password'
          value={formik.values.password}
          onChange={formik.handleChange}
          style={{marginLeft: '.6rem'}}
          endAdornment={
            <InputAdornment position='end' >
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment position='start'>
              <LockIcon />
            </InputAdornment>
          }
        />

<Input
          id='passwordConfirm'
          name='passwordConfirm'
          type={values.showPassword ? "text" : "password"}
          fullWidth
          placeholder='Confirm password'
          label='Confirm password'
          value={formik.values.passwordConfirm}
          onChange={formik.handleChange}
          style={{marginLeft: '.6rem'}}
          endAdornment={
            <InputAdornment position='end' >
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment position='start'>
              <LockIcon />
            </InputAdornment>
          }
        />
     
        <Button type="submit" value="Confirm" onClick={formik.handleSubmit} />
      </Form>
    </Container>
  );
};

export default NewPassword;
