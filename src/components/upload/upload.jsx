import React from "react";
import ImageUploading from "react-images-uploading";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
import styled from "styled-components";

const Uploadbutton = styled.button`
width= min-content;
color: white;
background: blue;
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
export default function Upload() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
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
              <CloudUploadOutlinedIcon /> Upload Picture
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
  );
}
