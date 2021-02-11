import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import message from "../../constant/response";
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Alert, TYPE } from "../../components/alert";

import {
  Email,
  Passwordd,
  FormContainer,
  Box,
  Boxxx,
  InputField,
  InputFieldd,
  Form,
  ContiuneButton,
  ForgotPass,
} from "./join.style";
import axios from "axios";
import { ActiveContext } from "../../utils/store";

const Login = ({ history }) => {
  const isActive = useContext(ActiveContext);

  
  const [passwordShown, setPasswordShown] = useState(false);
  // const alert = useAlert();
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const URL = "https://smanhq.herokuapp.com/";
  // const URL = "http://127.0.0.1:5000/";
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post(`${URL}api/v1/users/login`, formik.values, {
          withCredentials: true,
        })
        .then((res, req) => {
          if (res.data.status === "SUCCESS") {
            Alert(res.data.message, TYPE.SUCCESS);

            isActive.setUserActive(true);
            isActive.setUserInfo(res.data.user);

            return history.push("/");
          }
        })
        .catch((err) => {
          // err msg

          Alert(message(err), TYPE.ERROR);
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

        <Boxxx>
          <InputFieldd
            id='password'
            name='password'
            type={passwordShown ? "text" : "password"}
            placeholder='Password'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
           <Passwordd onClick={togglePasswordVisiblity}><VisibilityIcon/></Passwordd>
        </Boxxx>
        <ForgotPass to="/input-email">Forgot your password?</ForgotPass>
        <ContiuneButton type="submit" value="Login" big />
      </Form>
    </FormContainer>
  );
};

export default Login;
