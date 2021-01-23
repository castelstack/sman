import React from "react";
import { HeadText } from "../../constant/styles";
import Button from "../../components/button/button";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import ImageUploading from "react-images-uploading";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";

import { PhotoCamera } from "@material-ui/icons";

const Container = styled.div`
  margin: 20px 110px;
  display: grid;
  grid-template-columns: 1fr;
  @media only screen and (max-width: 800px) {
    margin: 20px 80px;
  }

  @media only screen and (max-width: 600px) {
    margin: 20px 60px;
  }

  @media only screen and (max-width: 400px) {
    margin: 10px 20px;
  }
`;

const WriteIn = styled.div`
  margin-bottom: 10px;
`;

const HeadBox = styled.div`
  display: flex;

  align-items: center;
  padding: 50px 0;

  @media only screen and (max-width: 600px) {
    padding: 15px 0;
  }

  @media only screen and (max-width: 400px) {
    padding: 16px 0;
  }
`;

const Heading = styled(HeadText)`
  font-size: 45px;
  line-height: 61px;

  color: #c4c4c4;

  @media only screen and (max-width: 1000px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 15px;
  }
`;
const Post = styled(Button)`
  margin: 30px 0;
  align-self: flex-end;
`;
const Uploadbutton = styled.button`
width= min-content;
color: white;
background: #3f51b5;
border: none;
display: flex;
align-items: center;
padding: 3px;
border-radius: 5px;
outline: none;
`;

const Frame = styled.div`
  border: ${(props) => (props.border ? "dotted 2px gray" : "none")};
  height: 13rem;
  width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

// create new gist
const WriteGist = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <Container>
      <HeadBox>
        <Heading>Write Your Stingy Gist</Heading>
      </HeadBox>
      <WriteIn>
        <TextField
          id='outlined-multiline-static'
          label='Write your rules'
          multiline
          rows={20}
          fullWidth
          placeholder='Drop your gist'
          variant='outlined'
        />
      </WriteIn>
      <div className='App'>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey='data_url'
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
        }) => (
          // write your building UI
          <Frame className='upload__image-wrapper'>
           <Uploadbutton onClick={onImageUpload}>
                <PhotoCamera /> Add photo
                </Uploadbutton>

            {imageList.map((image, index) => (
              <div
                key={index}
                className='image-item'
                style={{ display: "flex" }}
              >
                <img src={image["data_url"]} alt='' width='180' height='170' />

                <i onClick={() => onImageRemove(index)}>
                  <ClearOutlinedIcon />
                </i>
              </div>
            ))}
          </Frame>
        )}
      </ImageUploading>
    </div>
      <div>

      <Post value='Post' />
      </div>
    </Container>
  );
};

export default WriteGist;
