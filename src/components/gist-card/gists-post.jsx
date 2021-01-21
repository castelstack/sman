import React from "react";
import { SmText, HeadText } from "../../constant/styles";
import ShowMoreText from "react-show-more-text";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";
import Favorite from "@material-ui/icons/Favorite";
import styled from "styled-components";
import "./style.css";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { FavoriteBorder } from "@material-ui/icons";


const Container = styled.div`
  border: 1px solid #e5e5e5;
  padding: 20px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  n 8                
  
  @media only screen and (max-width: 400px) {
    padding: 10px;
  }
`;
const GistImg = styled.img`
  object-fit: cover;
  max-width: 18rem;
`;
const GistBox = styled(SmText)`
  font-size: 18px;
  line-height: 30px;

  color: #828282;

  @media only screen and (max-width: 800px) {
    font-size: 16px;
    line-height: 30px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 28px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 14px;
    line-height: 25px;
  }
`;

const Author = styled(SmText)`
  font-size: 16px;
  line-height: 30px;
  font-style: italic;
  color: #828282;

  @media only screen and (max-width: 800px) {
    font-size: 16px;
    line-height: 30px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 28px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 14px;
    line-height: 25px;
  }
`;

const GistTag = styled(HeadText)`
font-size: 22px;
line-height: 30px;

color: #4D4B4B;

@media only screen and (max-width: 800px) {
  font-size: 25px;
  line-height: 25px;
}

@media only screen and (max-width: 600px) {
  font-size: 20px;
  line-height: 22px;
  

@media only screen and (max-width: 400px) {
  font-size: 16px;
  line-height: 20px;
 
}
`;
const Content = styled.div`

 display: grid;
  grid-template-columns: 1fr  min-content;
  grid-gap: 40px;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr ;
  }
`;
const Icon = styled.div``;
const LikeShare = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(2, min-content);
  grid-gap: 5px;
  align-items: center;

  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr min-content;
  }
`;
const executeOnClick = (isExpanded) => {
  console.log(isExpanded);
};
const GistsPost = ({ tag, gistspost, image, name }) => {
  const [like, setLike] = React.useState({
    like: true,
  });

  const handleChange = (event) => {
    setLike({ ...like, [event.target.name]: event.target.checked });
  };

  return (
    <Container>
      <GistTag>{tag}</GistTag>
      <Content>

      <ShowMoreText
        /* Default options */
        lines={3}
        more='>>>'
        less='<<<'
        className='content-css'
        anchorClass='my-anchor-css-class'
        onClick={executeOnClick}
        expanded={false}
      >
        <GistBox>{gistspost}</GistBox>
      </ShowMoreText>
      <div>{image ? <GistImg src={image} alt='photo' /> : ""}</div>
     
      </Content>
        <LikeShare>
          <Author>By {name}</Author>
          <FormControlLabel
            control={
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                name='like'
                onClick={handleChange}
              />
            }
            label=''
          />
          <div className='btn_wrap'>
            <span className='share'>Share</span>
            <div className='socials'>
              <Icon className='icon'>
                <FacebookShareButton quote={tag} url='goal.com'>
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
              </Icon>
              <Icon className='icon'>
                <WhatsappShareButton>
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
              </Icon>
              <Icon className='icon'>
                <TwitterShareButton>
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
              </Icon>
            </div>
          </div>
        </LikeShare>
    
    </Container>
  );
};

export default GistsPost;
