import React from "react";
import Image from "../../images/join.png";

import {
  Container,
  Content,
  Text,
  Form,
  Box,
  Icon,
  InputFied,
  ContiuneButton
} from "./join.style";

const Join = () => {
  return (
    <Container>
      <Content>
        <img src={Image} alt='join us' />
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
              <InputFied type='text' name='search' placeholder='Name' />
            </Box>
            <Box >
              <Icon />
              <InputFied type='text' name='search' placeholder='Position' />
            </Box>
            <Box >
              <Icon />
              <InputFied type='text' name='search' placeholder='Password' />
            </Box>
                  </form>
                  <ContiuneButton value='Continue' big/>
        </Form>
      </Content>
    </Container>
  );
};

export default Join;
