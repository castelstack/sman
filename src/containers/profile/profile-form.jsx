import React from "react";
import TextField from "@material-ui/core/TextField";
import { Form } from "../join/join.style";
import Button from "../../components/button/button";
import ImageUploading from "react-images-uploading";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import styled from "styled-components";
import { PhotoCamera } from "@material-ui/icons";
const Container = styled.div`

display: grid;
grid-template-columns: 1fr;
grid-gap: 30px;`
const Uploadbutton = styled.button`
width= min-content;
color: white;
background: blue;
border: none;
display: flex;
align-items: center;
padding: 3px;
border-radius: 5px;
ou  tline: none;
`;

const Frame = styled.div`
  border: ${(props) => (props.border ? "dotted 2px gray" : "none")};
  height: 13rem;
  width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10rem;
`;

const Image = styled.img`
height: 13rem;
  width: 15rem;
  border-radius: 10rem;
`

const ProfileForm = () => {
    const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };


  return (
    <Container>

        <div>
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
              <PhotoCamera /> 
            </Uploadbutton>

            {imageList.map((image, index) => (
              <div
                key={index}
                className='image-item'
                style={{ display: "flex" }}
              >
                <Image src={image["data_url"]} alt='' width='180' height='170' />

                <i onClick={() => onImageRemove(index)}>
                  <ClearOutlinedIcon />
                </i>
              </div>
            ))}
          </Frame>
        )}
      </ImageUploading>
    </div>
      <Form>
        <TextField
          id='outlined-full-width'
          label='Username'
          style={{ margin: 8 }}
          placeholder='Usernam'
          helperText='Full width!'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
        />

        <TextField
          id='outlined-full-width'
          label='Email'
          style={{ margin: 8 }}
          placeholder='Email'
          helperText='Full width!'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
        />

        <TextField
          id='outlined-full-width'
          label='SMAN ID'
          style={{ margin: 8 }}
          placeholder='ID'
          helperText='Full width!'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
        />

        <TextField
          id='outlined-full-width'
          label='Password'
          style={{ margin: 8 }}
          placeholder='Password'
          helperText='Full width!'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
        />
      </Form>
      <Button value='Save' />
    </Container>
  );
};

export default ProfileForm;
