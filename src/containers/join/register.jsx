import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import HttpsOutlinedIcon from "@material-ui/icons/HttpsOutlined";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonIcon from "@material-ui/icons/Person";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";

import Input from "@material-ui/core/Input";
import { IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Register() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",

    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <TextField
        className={classes.margin}
        id="firstName"
            name="firstName"
            type="text"
        fullWidth
        placeholder='First Name'
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
        id="lastName"
            name="lastName"
            type="text"
        fullWidth
        placeholder='Last Name'
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
        id="email"
            name="email"
            type="email"
        fullWidth
        placeholder='Email'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <Input
        id='password'
        name='password'
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        fullWidth
        placeholder='Password'
        label='Password'
        onChange={handleChange("password")}
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
    </div>
  );
}
