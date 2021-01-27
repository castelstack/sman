import React from "react";
import { useFormik } from "formik";
import {
  Email,
  Password,
  FormContainer,
  Box,
  InputField,
  Form,
  ContiuneButton,
} from "./join.style";
import axios from "axios";

const Login = ({ history }) => {
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  const URL = "https://smanhq.herokuapp.com/";
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      
      console.log("form data", formik.values);
      axios
        .post(`${URL}api/v1/users/login`, formik.values, {withCredentials: true})
        .then((res, req) => {
          console.log(res.data);
          console.log(req)
          res.data.status === "SUCCESS"
            ? history.push("/")
            : alert("you're not log in");
        })
        .catch((err) => {
          // err msg
          alert(err)
          //alert(err.response.data.message);
        });
    },
  });

  return (
    <FormContainer>
      <Form onSubmit={formik.handleSubmit}>
        <Box>
          <Email />
          <InputField
            id='email'
            name='email'
            type='email'
            placeholder='Email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Box>

        <Box>
          <Password />
          <InputField
            id='password'
            name='password'
            type='password'
            placeholder='Password'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Box>
        <ContiuneButton type='submit' value='Login' big />
      </Form>
    </FormContainer>
  );
};

export default Login;
