 import React, { useState, useRef } from "react";
// import Image from "../../images/Visual.png";
import StingyCard from "./stingy-card";
import { exportComponentAsPNG } from "react-component-export-image";
import { useAlert } from 'react-alert'
import ImageUploading from "react-images-uploading";
//import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import Spinner from '../../components/spinner/spinner'


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
  
  UploadBox,
  Uploadbutton,
  Frame,
  Size,
} from "./stingy-reg.style";



import PhotoCamera from '@material-ui/icons/PhotoCamera';




const Join = () => {
  const [data, setData] = useState({
    names: "",
    position: "",
    location: "",
    sman_id: "",
  });
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const [change, setChange] = useState(false)
  const alert = useAlert()
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    
    setImages(imageList);
    setChange(true)
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


  //preview card
  const Print = React.forwardRef((props, ref) => (
    <Size ref={ref}>
      {images.map((image, index) => (
        <StingyCard
          key={index}
          names={data.names}
          position={data.position}
          branch={data.branch}
          image={image["data_url"]}
        />
      ))}
    </Size>
  ));
  

  const componentRef = useRef();

  const handleClick = (event) => {
    event.preventDefault();
  exportComponentAsPNG(componentRef);
  alert.show('Card Generated');
}


  return (
    <Container>
    
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
                <PhotoCamera /> Add Photo
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
         
          {
            change ?   <Print ref={componentRef} style={{ display: "none" }} /> :  <Spinner />
                }
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
                value='Member'
                placeholder='Position'
                disabled
              />
            </Box>
            <Box>
              <Password />
              <InputFied
                type='text'
                name='branch'
                onChange={handleChange}
                value={data.location.target}
                placeholder='Stingy branch'
              />
            </Box>
          </form>
          <ContiuneButton
            value='Generate Card'
            big
            onClick={handleClick}
           
          />
          
        </Form>
      </Content>
    </Container>
  );
};

export default Join;


