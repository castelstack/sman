/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import message from "../../constant/response";
import constants from "../../constant";
import { useFormik } from "formik";
import axios from "axios";

import {
  FormContainer,
  ContiuneButton,
  Form,
} from "./join.style";
import { Alert, TYPE } from "../../components/alert";

import Input from "@material-ui/core/Input";
import { IconButton, InputLabel} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Select from "@material-ui/core/Select";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import HttpsOutlinedIcon from "@material-ui/icons/HttpsOutlined";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonIcon from "@material-ui/icons/Person";
import AccountCircle from "@material-ui/icons/AccountCircle";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
const { userHelpers } = constants;
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
    gridColumn: '1/-1'
  },
}));
const SignupForm = (props) => {
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  const [states] = useState(userHelpers);
  //material ui js func
  const classes = useStyles();
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
            Alert(res.data.message, TYPE.SUCCESS);
          }

          setTimeout(() => location.replace("/join/login"), 1000);
        })

        .catch((err) => {
          // what now? render error message
          Alert(message(err), TYPE.ERROR);
          // console.log(err);
        });
    },
  });
  Alert(formik.values, TYPE.SUCCESS);
  return (
    <FormContainer>
      <Form onSubmit={formik.handleSubmit}>
        <TextField
          className={classes.margin}
          id='firstName'
          name='firstName'
          type='text'
          fullWidth
          placeholder='First Name'
          value={formik.values.firstName}
            onChange={formik.handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          className={classes.margin}
          id='lastName'
          name='lastName'
          type='text'
          fullWidth
          placeholder='Last Name'
          value={formik.values.lastName}
            onChange={formik.handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <PersonOutlineOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          className={classes.margin}
          id='email'
          name='email'
          type='email'
          fullWidth
          placeholder='Email'
          style={{gridColumn: '1/-1'}}
          value={formik.values.email}
            onChange={formik.handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />

        <FormControl className={classes.formControl}>
          <InputLabel id='demo-simple-select-label'>Select Branch</InputLabel>
          <Select
            id='branch'
            name='branch'
            value={formik.values.branch}
            onChange={formik.handleChange}
            placeholder='Branch'
            startAdornment={
              <InputAdornment position='start'>
                <LocationOnIcon />
              </InputAdornment>
            }
          >
            <option value='select a state'>Select Branch</option>

            {states.map((item, index) => (
              <option style={{ padding: '.3rem' }}key={index} value={item}>
                {item}
              </option>                                                                                                                                                                                                                                                                                                                                                                             
            ))}
          </Select>
        </FormControl>
        <Input
          id='password'
          name='password'
          type={values.showPassword ? "text" : "password"}
          fullWidth
          placeholder='Password'
          label='Password'
          value={formik.values.password}
            onChange={formik.handleChange}
            style={{gridColumn: '1/-1', marginLeft: '.3rem'}}
          endAdornment={
            <InputAdornment position='end'>
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
              <HttpsOutlinedIcon />
            </InputAdornment>
          }
        />

        <ContiuneButton type='submit' value='Register' big />
      </Form>
    </FormContainer>
  );
};

export default SignupForm;
