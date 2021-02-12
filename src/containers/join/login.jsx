import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import message from "../../constant/response";
import { Alert, TYPE } from "../../components/alert";

import Input from "@material-ui/core/Input";
import { IconButton} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import {
  FormContainer,
  FormLogin,
  ContiuneButton,
  ForgotPass,
} from "./join.style";
import axios from "axios";
import { ActiveContext } from "../../utils/store";

//STYLE MATERIAL UI
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
    gridColumn: '1/-1',
    gridRow: '2/3'
  },
}));
const Login = ({ history }) => {
  const isActive = useContext(ActiveContext);

  // const alert = useAlert();
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.

  //material ui js func
  const classes = useStyles();
  const [values, setValues] = useState({
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
      <FormLogin onSubmit={formik.handleSubmit}>
      <TextField
          className={classes.margin}
          id='email'
          name='email'
          type='email'
          fullWidth
          placeholder='Email'
          value={formik.values.email}
            onChange={formik.handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />

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
        <ForgotPass to="/input-email">Forgot your password?</ForgotPass>
        <ContiuneButton type="submit" value="Login" big />
      </FormLogin>
    </FormContainer>
  );
};

export default Login;
