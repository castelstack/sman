import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import {
  FormContainer,
  Box,
  InputField,
  Icon,
  ContiuneButton,
  Email,
  LocationOn,
  Form,
  Person,
  Password,
} from "./join.style";

const SignupForm = (props) => {
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  
  const URL = "https://smanhq.herokuapp.com/";
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      position: "member",
      password: "",
      passwordConfirm: "",
      branch: "",
      lastName: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log("form data", formik.values);
      axios
        .post(`${URL}api/v1/users/signup`, formik.values)
        .then((res) => {
          console.log(res.data);
          res.data.status === "SUCCESS"
            ? props.history.goBack()
            : alert("Registeration failed!");
        })
        .catch((err) => {
          // what now?
          alert(err.response.data.message);
        });
    },
  });

  return (
    <FormContainer>
      <Form onSubmit={formik.handleSubmit}>
        <Box>
          <Icon />
          <InputField
            id='firstName'
            name='firstName'
            type='text'
            placeholder='First name'
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </Box>

        <Box>
          <Person />
          <InputField
            id='lastName'
            name='lastName'
            type='text'
            placeholder='Last name'
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </Box>
        <Box>
          <LocationOn />
          <InputField
            id='branch'
            name='branch'
            type='text'
            placeholder='State, e.g Abuja'
            onChange={formik.handleChange}
            value={formik.values.branch}
          />
        </Box>

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
        <Box>
          <Password />
          <InputField
            id='passwordConfirm'
            name='passwordConfirm'
            type='password'
            placeholder='Confirm password'
            onChange={formik.handleChange}
            value={formik.values.passwordConfirm}
          />
        </Box>
        <ContiuneButton type='submit' value='Register' big />
      </Form>
    </FormContainer>
  );
};

export default SignupForm;
