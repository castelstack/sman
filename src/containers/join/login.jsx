import React from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import {
  Form,
  Box,
  Icon,
  InputFied,
  ContiuneButton,
  Password,
  ForgotPass,
} from "./join.style";

const Login = () => {
  const alert = useAlert();
  const handleClick = () => {
    console.log("sent passwor reset");
    alert.show("Recovery email sent");
  };

  return (
    <div className='login-Login-wrapper'>
      <Form>
        <form
          style={{
            display: "grid",
            gridTemplateRows: "repeat(3, min-content)",
            gridGap: "50px",
          }}
        >
          <Box>
            <Icon />
            <InputFied type='text' name='name' placeholder='Name' required />
          </Box>

          <Box>
            <Password />
            <InputFied
              type='password'
              name='password'
              placeholder='Password'
              required
            />
          </Box>
        </form>
        <Link to='/password-reset'>
          <ForgotPass onClick={handleClick}>Forgot password?</ForgotPass>
        </Link>
        <ContiuneButton value='Login' big />
      </Form>
    </div>
  );
};

export default Login;
