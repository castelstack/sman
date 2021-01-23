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
import "./giststyle.css";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { FavoriteBorder } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const Container = styled.div`
  border: 1px solid #e5e5e5;
  padding: 20px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    animation-name: example;
    animation-duration: 0.25s;
    border-left: 8px solid #843035;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @keyframes example {
    0% {
      border-left: 2px solid #ffffff;
    }
    25% {
      border-left: 3px solid #ffe6e6;
    }
    50% {
      border-left: 4px solid #843035;
    }
    100% {
      border-left: 5px solid #843035;
    }
  }
  @media only screen and (max-width: 400px) {
    padding: 10px;
  }
`;
const ImageContainer = styled.div``;
const GistImg = styled.img`
  object-fit: cover;
  max-width: 18rem;
`;

const ModalImg = styled.img`
  
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
  font-size: 12px;
  line-height: 30px;
  font-style: italic;
  color: #828282;

  
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
  grid-template-columns: 1fr min-content;
  grid-gap: 40px;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
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
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
   
  },
}));

const executeOnClick = (isExpanded) => {
  console.log(isExpanded);
};
const GistsPost = ({ tag, gistspost, image, name }) => {
  //state for like
  const [like, setLike] = React.useState({
    like: true,
  });

  //checkbox for like
  const handleChange = (event) => {
    setLike({ ...like, [event.target.name]: event.target.checked });
  };

  //state and handle for modal
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const  url  = 'sman-beta.vercel.app/gist';
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
        <div style={{ cursor: "pointer" }} onClick={handleOpen}>
          <ImageContainer>
            {image ? <GistImg src={image} alt='photo' /> : ""}
          </ImageContainer>
        </div>
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <ModalImg src={image} alt='photo' />
            </div>
          </Fade>
        </Modal>
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
          label='12'
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
              title="Read all stingy gists" 
                url={url}
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>
            </Icon>
            <Icon className='icon'>
              <TwitterShareButton
               title={gistspost}
               url={url}
               via='sman'>
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
