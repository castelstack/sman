import React, { useEffect } from "react";
import { SmText, HeadText } from "../../constant/styles";
import constant from "../../constant";
import ShowMoreText from "react-show-more-text";
import Truncate from "truncate";

import EditIcon from "@material-ui/icons/Edit";
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
import { Link } from "react-router-dom";
import axios from "axios";

const { capitalizeWord, capitalizeString } = constant;

const Container = styled.div`
  border: 1px solid #e5e5e5;
  padding: 20px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @media only screen and (max-width: 400px) {
    padding: 10px;
  }
`;
const ImageContainer = styled.div`
//height: 50rem;`;
const GistImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 10rem;
`;

const ModalImg = styled.img``;
const GistBox = styled(SmText)`
  font-size: 14px;
  line-height: 30px;

  color: #828282;

  @media only screen and (max-width: 800px) {
    font-size: 14px;
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
  font-size: 22px;
  line-height: 25px;
}

@media only screen and (max-width: 600px) {
  font-size: 20px;
  line-height: 22px;
  


`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

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
const TitleEdit = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  justify-content: space-between;
`;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalImage: {
    width: "100%",
    margin: '3rem',
    objectFit: 'contain'

  },
}));

const executeOnClick = (isExpanded) => {
  console.log(isExpanded);
};
const GistsPost = ({
  tag,
  gistspost,
  image,
  name,
  likes,
  liked,
  loggedIn,
  user,
  gistId,
  gist,
  gistCreator,
  userSman,
}) => {
  let userId = user;

  //state for like
  const [currentLiked, setLiked] = React.useState(false);

  const [defaultLiked, setDefaultLiked] = React.useState(false);

  const [currentLikes, setLikes] = React.useState(likes);

  const [T_ID, setTID] = React.useState(0);

  const [disabled, setDisabled] = React.useState(!loggedIn);

  useEffect(() => {
    if (liked.includes(userId)) {
      setLiked(true);
      setDefaultLiked(true);
    }
  }, [liked, userId, setDisabled]);

  //checkbox for like
  const handleChange = (event) => {
    setLiked(!currentLiked);

    !currentLiked ? setLikes(currentLikes + 1) : setLikes(currentLikes - 1);

    const data = { id: userId };
    let execute = false;

    if (!currentLiked === true && defaultLiked === false) {
      data.operation = "inc";
      execute = true;
    } else if (!currentLiked === false && defaultLiked === true) {
      data.operation = "dec";
      execute = true;
    }

    clearTimeout(T_ID);

    if (execute) {
      const timeId = setTimeout(() => {
        saveLiked(data);
      }, 100);

      setTID(timeId);
    }
  };

  function saveLiked(data) {
    const URL = "https://smanhq.herokuapp.com/api/v1/gists";

    axios
      .patch(`${URL}/${gistId}/react`, data, { withCredentials: true })
      .then((res) => {
        setDefaultLiked(!defaultLiked);
      })
      .catch((err) => {
        setLiked(currentLiked);
        setLikes(currentLikes);
      });
  }

  //state and handle for modal
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const url = "sman-beta.vercel.app/gist";

  return (
    <Container>
      <TitleEdit>
        <GistTag>{capitalizeWord(tag)}</GistTag>

        {loggedIn && gistCreator === userSman ? (
          <Link
            to={{
              pathname: "/edit",
              gist,
            }}
          >
            <EditIcon color="primary" />
          </Link>
        ) : (
          ""
        )}
      </TitleEdit>

      <Content>
        <ShowMoreText
          /* Default options */
          lines={3}
          more=">>>"
          less="<<<"
          className="content-css"
          anchorClass="my-anchor-css-class"
          onClick={executeOnClick}
          expanded={false}
        >
          <GistBox>{capitalizeString(gistspost)}</GistBox>
        </ShowMoreText>
        <div style={{ cursor: "pointer" }} onClick={handleOpen}>
          <ImageContainer>
            {!image ? (
              ""
            ) : image === "default.jpg" ? (
              ""
            ) : (
              <GistImg src={`${image}`} alt="photo" />
            )}
          </ImageContainer>
        </div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
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
            <div className={classes.modal}>
              <ModalImg
                src={`${image}`}
                alt="photo"
                className={classes.modalImage}
              />
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
              name="like"
              onChange={handleChange}
              disabled={disabled}
              checked={currentLiked}
            />
          }
          label={currentLikes}
        />
        <div className="btn_wrap">
          <span className="share">Share</span>
          <div className="socials">
            <Icon className="icon">
              <FacebookShareButton quote={gistspost} url={`${url}`}>
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
            </Icon>
            <Icon className="icon">
              <WhatsappShareButton
                title={`${Truncate(gistspost, 600)} ...read mor at`}
                url={url}
              >
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>
            </Icon>
            <Icon className="icon">
              <TwitterShareButton
                title={`${Truncate(gistspost, 190)}  ...read more at `}
                url={url}
                via="sman"
                // hashtags="SMAN"
              >
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
