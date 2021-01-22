import React from "react";
import Image from "../../images/join.png";

import {
  Container,
  Content,
  Text,
  Form,
  Box,
  Icon,
  Img,
  InputFied,
  ContiuneButton,
  Position,
  Password
} from "./join.style";

const Join = () => {
  return (
    <Container>
      <Content>
        <Img src={Image} alt='join us' />
        <Form>
          <Text>
            Before you generate your ID we need to be sure you’re with us.
          </Text>
                  <form style={{
              display: 'grid',
              gridTemplateRows: 'repeat(3, min-content)',
              gridGap: '50px',
          }}> 
            <Box >
              <Icon />
              <InputFied type='text' name='name' placeholder='Name' required />
            </Box>
            <Box >
              <Position />
              <InputFied type='email' name='email' placeholder='Email' required />
            </Box>
            <Box >
              <Password />
              <InputFied type='password' name='password' placeholder='Password' required />
            </Box>
                  </form>
                  <ContiuneButton value='Continue' big/>
        </Form>
      </Content>
    </Container>
  );
};

export default Join;
