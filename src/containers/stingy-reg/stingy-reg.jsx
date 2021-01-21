import React, { useState, useRef} from "react";
import Image from "../../images/Visual.png";
import StingyCard from "./stingy-card";
import {  exportComponentAsPNG } from 'react-component-export-image';

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
  UploadBox,
} from "./stingy-reg.style";
import Upload from "../../components/upload/upload";

const Join = () => {
  const [data, setData] = useState({
    names: "",
    position: "",
    location: "",
    sman_id: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  
  const Print = React.forwardRef((props, ref) => (
    <span ref={ref} style={{maxWidth: '24.5rem'}}>

      
      <StingyCard
      names={data.names}
      position={data.position}
      location={data.location}
    />
    </span>
  ));
  
 
  const componentRef = useRef();

  return (
    <Container>
      <Print ref={componentRef} />
      <Content>
        <UploadBox>
          <Upload />
        </UploadBox>
        <Form>
          <Verified src={Image} alt='Now a stingy man' />

          <form
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gridTemplateRows: "repeat(3, min-content)",
              gridGap: "50px",
            }}
          >
            <Box>
              <Icon />
              <InputFied
                type='text'
                name='names'
                onChange={handleChange}
                value={data.names.target}
                placeholder='Name'
              />
            </Box>
            <Box>
              <Position />
              <InputFied
                type='text'
                name='position'
                onChange={handleChange}
                value={data.position.target}
                placeholder='Position'
              />
            </Box>
            <Box>
              <Password />
              <InputFied
                type='text'
                name='location'
                onChange={handleChange}
                value={data.location.target}
                placeholder='Stingy branch'
              />
            </Box>
          </form>
          <ContiuneButton
            value='Generate Card'
            big
            onClick={() => exportComponentAsPNG(componentRef) }
          />
          
        </Form>
      </Content>
      
    </Container>
  );
};

export default Join;
