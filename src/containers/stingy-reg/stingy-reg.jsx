import React from "react";
import Image from "../../images/Visual.png";

import {
  Container,
  Content,
  Form,
  Box,
  Icon,
  InputFied,
  ContiuneButton,
  Position,
  Password,
  Verified,
} from "./stingy-reg.style";
import Upload from "../../components/upload/upload";

const Join = () => {
  return (
    <Container>
      <Content>
        <div
          style={{
            
            
            
          }}
        >
          <Upload />
        </div>
        <Form>
          <Verified src={Image} alt='Now a stingy man' />

          <form
            style={{
              display: "grid",
              gridTemplateRows: "repeat(3, min-content)",
              gridGap: "50px",
            }}
          >
            <Box>
              <Icon />
              <InputFied type='text' name='name' placeholder='Name' />
            </Box>
            <Box>
              <Position />
              <InputFied type='text' name='position' placeholder='Position' />
            </Box>
            <Box>
              <Password />
              <InputFied
                type='text'
                name='branch'
                placeholder='Stingy branch'
              />
            </Box>
          </form>
          <ContiuneButton value='Generate Card' big />
        </Form>
      </Content>
    </Container>
  );
};

export default Join;
