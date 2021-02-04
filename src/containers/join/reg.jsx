/* eslint-disable no-restricted-globals */
import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useAlert } from "react-alert";

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

  const alert = useAlert();

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
      axios
        .post(`${URL}api/v1/users/signup`, formik.values)
        .then((res) => {
          if (res.data.status === "SUCCESS") {
            alert.show(res.data.message);
          }

          setTimeout(() => location.replace("/join/login"), 1000);
        })

        .catch((err) => {
          // what now? render error message
          alert.error(err.response.data.message);
          // console.log(err);
        });
    },
  });

  return (
    <FormContainer>
      <Form onSubmit={formik.handleSubmit}>
        <Box>
          <Icon />
          <InputField
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First name"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </Box>

        <Box>
          <Person />
          <InputField
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </Box>
        <Box>
          <LocationOn />
          <InputField
            id="branch"
            name="branch"
            type="text"
            placeholder="State, e.g Abuja"
            onChange={formik.handleChange}
            value={formik.values.branch}
          />
        </Box>

        <Box>
          <Email />
          <InputField
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Box>

        <Box>
          <Password />
          <InputField
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Box>
        <Box>
          <Password />
          <InputField
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            placeholder="Confirm password"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirm}
          />
        </Box>
        <ContiuneButton type="submit" value="Register" big />
      </Form>
    </FormContainer>
  );
};

export default SignupForm;
