import React, { useEffect } from "react";
import { SmText, HeadText } from "../../constant/styles";
import Truncate from "truncate";

import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { FavoriteBorder } from "@material-ui/icons";
import Favorite from "@material-ui/icons/Favorite";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  border: 1px solid #e5e5e5;
  padding: 20px;
  border-radius: 5px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    animation-name: example;
    animation-duration: 0.25s;
    border-left: 2px solid #843035;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @keyframes example {
    0% {
      border-left: 2px solid #ffffff;
    }
    25% {
      border-left: 2px solid #ffe6e6;
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

const RuleBox = styled(SmText)`
  font-size: 16px;
  line-height: 30px;

  color: #727373;

  @media only screen and (max-width: 800px) {
    font-size: 16px;
    line-height: 30px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 28px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 12px;
    line-height: 25px;
  }
`;

const Number = styled(HeadText)`
  width: max-content;

  background: #843035;
  border-radius: 7px;
  padding: 0.5rem;
  font-size: 18px;
  line-height: 25px;

  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
    font-size: 17px;
    line-height: 22px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

const LikeShare = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(2, min-content);
  grid-gap: 5px;
  align-items: center;

  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr min-content;
  }
`;
const Author = styled(SmText)`
  font-size: 12px;
  line-height: 30px;
  font-style: italic;
  color: #828282;
`;
const Icon = styled.div``;

const Rule = ({
  number,
  rule,
  ruleId,
  name,
  id,
  likes,
  liked,
  loggedIn,
  user,
}) => {
  //state for like
  let userId = user;

  //state for like
  const [currentLiked, setLiked] = React.useState(false);

  const [defaultLiked, setDefaultLiked] = React.useState(false);

  const [currentLikes, setLikes] = React.useState(likes);

  const [T_ID, setTID] = React.useState(0);

  const [disabled, setDisabled] = React.useState(!loggedIn);

  console.log(loggedIn, disabled);

  useEffect(() => {
    if (liked.includes(userId)) {
      setLiked(true);
      setDefaultLiked(true);
    }
  }, [liked, userId, setDisabled]);

  //url for fb , twitter and whatsapp
  const url = "sman-beta.vercel.app/rules-and-regulation";
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
    const URL = "https://smanhq.herokuapp.com/api/v1/rules";

    axios
      .patch(`${URL}/${ruleId}/react`, data, { withCredentials: true })
      .then((res) => {
        setDefaultLiked(!defaultLiked);
      })
      .catch((err) => {
        setLiked(currentLiked);
        setLikes(currentLikes);
      });
  }
  return (
    <Container>
      <Number>Stingy Rule!</Number>
      <RuleBox>{rule}</RuleBox>
      <LikeShare>
        <Author>SMAN ID: {id}</Author>

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
              <FacebookShareButton
                quote={`Rule ${number + 1} Says: ${rule}`}
                url={url}
              >
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
            </Icon>
            <Icon className="icon">
              <WhatsappShareButton
                title={`Rule ${number + 1} Says: ${Truncate(
                  rule,
                  600
                )} ...read more at`}
                url={url}
              >
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>
            </Icon>
            <Icon className="icon">
              <TwitterShareButton
                title={`Rule ${number + 1} Says: ${Truncate(
                  rule,
                  190
                )}  ...read more at `}
                url={url}
                via="sman-hq"
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

export default Rule;
