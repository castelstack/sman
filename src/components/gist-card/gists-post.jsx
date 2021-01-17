import React from "react";
import {  SmText, HeadText } from "../../constant/styles";

import styled from "styled-components";

const Container = styled.div`
border: 1px solid #E5E5E5;
padding: 20px;
border-radius: 5px;

@media only screen and (max-width: 400px) {
  padding: 10px;
}`;

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

const GistsPost = ({ tag, gistspost }) => {
  return (
    <Container>
      <GistTag>{tag}</GistTag>
      <GistBox>{gistspost}</GistBox>
    </Container>
  );
};

export default GistsPost;
