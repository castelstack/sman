import React, { useState, useRef } from "react";
import Image from "../../images/Visual.png";
import StingyCard from "./stingy-card";
import { exportComponentAsPNG } from "react-component-export-image";

import ImageUploading from "react-images-uploading";
//import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";

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
  Uploadbutton,
  Frame,
} from "./stingy-reg.style";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

const Join = () => {
  const [data, setData] = useState({
    names: "",
    position: "",
    location: "",
    sman_id: "",
  });
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList);
    setImages(imageList);
  };

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
    <span ref={ref} style={{ width: 640, height: 472 }}>
      {images.map((image, index) => (
        <StingyCard
          key={index}
          names={data.names}
          position={data.position}
          location={data.location}
          image={image["data_url"]}
        />
      ))}
    </span>
  ));
  console.log(images);
 
  const componentRef = useRef();
 const { path, url } = useRouteMatch()
  return (
    <Container>
      <Print ref={componentRef} style={{display: 'none'}}/>
      <Content>
        <UploadBox>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey='data_url'
          >
            {({ imageList, onImageUpload, onImageUpdate, onImageRemove }) => (
              // write your building UI
              <Frame className='upload__image-wrapper'>
               
                  <Uploadbutton onClick={onImageUpload}>
                    <CloudUploadOutlinedIcon /> Upload Picture
                  </Uploadbutton>
               

                {imageList.map((image, index) => (
                  <div
                    key={index}
                    className='image-item'
                    style={{ display: "flex" }}
                  >
                    <img
                      src={image["data_url"]}
                      alt=''
                      width='180'
                      height='170'
                    />

                    {/* <i onClick={() => onImageRemove(image["data_url"])}>
                  <ClearOutlinedIcon />
                </i> */}
                  </div>
                ))}
              </Frame>
            )}
          </ImageUploading>
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
            onClick={() => exportComponentAsPNG(componentRef)}
          />
          <Link to={`${url}/download`}>download</Link>
        </Form>
        
      </Content>
      <Switch>

      <Route path={`${path}/download`} component={Print}></Route>
      </Switch>
    </Container>
  );
};

export default Join;
