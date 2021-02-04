import React, { useContext } from "react";
import { useFormik } from "formik";
import { useAlert } from "react-alert";
import {
  Email,
  Password,
  FormContainer,
  Box,
  InputField,
  Form,
  ContiuneButton,
  ForgotPass,
} from "./join.style";
import axios from "axios";
import { ActiveContext } from "../../utils/store";

const Login = ({ history }) => {
  const isActive = useContext(ActiveContext);

  const alert = useAlert();
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  const URL = "https://smanhq.herokuapp.com/";
  // const URL = "http://127.0.0.1:5000/";
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("form data", formik.values);
      axios
        .post(`${URL}api/v1/users/login`, formik.values, {
          withCredentials: true,
        })
        .then((res, req) => {
          if (res.data.status === "SUCCESS") {
            alert.show(res.data.message);

            isActive.setUserActive(true);

            return history.push("/");
          }
        })
        .catch((err) => {
          // err msg
          alert.error(err.response.data.message);
        });
    },
  });
  //use context

  return (
    <FormContainer>
      <Form onSubmit={formik.handleSubmit}>
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
        <ForgotPass to="/input-email">Forgot your password?</ForgotPass>
        <ContiuneButton type="submit" value="Login" big />
      </Form>
    </FormContainer>
  );
};

export default Login;
