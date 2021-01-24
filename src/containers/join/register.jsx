import React from "react";
import {
  Form,
  Box,
  Icon,
  Position,
  InputFied,
  ContiuneButton,
  Email,
  Password,
} from "./join.style";

const Register = () => {
  return (
    <div className='login-register-wrapper'>
      <Form>
        <form
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridGap: "10px",
          }}
        >
          <Box>
            <Icon />
            <InputFied type='text' name='name' placeholder='Name' required />
          </Box>
          <Box>
            <Email />
            <InputFied type='email' name='email' placeholder='Email' required />
          </Box>
          <Box>
            <Position />
            <InputFied
              type='email'
              name='email'
              value="Member"
              placeholder='Position'
              disabled
              required
            />
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
          <Box>
            <Password />
            <InputFied
              type='password'
              name='password'
              placeholder='Confirm password'
              required
            />
          </Box>
        </form>
        <ContiuneButton value='register' big />
      </Form>
    </div>
  );
};

export default Register;
