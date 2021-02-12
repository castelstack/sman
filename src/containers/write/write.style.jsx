import { FormControl,  TextField } from "@material-ui/core";

import { HeadText, SmText } from "../../constant/styles";
import Button from "../../components/button/button";
import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 110px;
  display: grid;
  grid-template-columns: 1fr;
  @media only screen and (max-width: 800px) {
    margin: 20px 80px;
  }

  @media only screen and (max-width: 600px) {
    margin: 20px 60px;
    justify-items:center;
  }

  @media only screen and (max-width: 400px) {
    margin: 10px 20px;
  }
`;
export const TextFieldd = styled(TextField)`
width: 50%;

@media (min-width: 00px) {
    width: 100%;
  }`
export const FormControll = styled(FormControl)`
width: 50%;

@media (min-width: 700px) {
    width: 100%;
  }`
export const Img = styled.img`
width: 10rem;
height: 10rem;`
export const WriteIn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
  margin-bottom: 10px;
  @media only screen and (max-width: 600px) {
    
    justify-items:center;
  }
`;

export const HeadBox = styled.div`
  display: flex;

  align-items: center;
  padding: 50px 0;

  @media only screen and (max-width: 600px) {
    padding: 5px 0;
  }

 
`;

export const Heading = styled(HeadText)`
  font-size: 45px;
  line-height: 61px;

  color: #c4c4c4;

  @media only screen and (max-width: 1000px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
`;
export const PreviewImg = styled.button`
border: none;
background: #00008b;
color: white;
padding: .5rem 1rem;
border-radius: 5px;
font-size: 14px;
margin: 1rem 0;
`
export const TextGist = styled.textarea`
  resize: none;
  outline: none;
  margin-top:1rem;
  width: 85%;
  height: 120px;
  border: 3px solid #cccccc;
  padding: 1rem;

  @media (min-width: 600px) {
    width: 100%;
    padding: .5rem;
  }
`;
export const TitleGist = styled.input`
  
  outline: none;
  width: 80%;
  margin-bottom: 1rem;
  border: none;
  border-bottom: 3px solid #000;
  padding: 5px;
`;
export const TextTitle = styled(SmText)`
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
  line-height: 8px;
  @media (min-width: 700px) {
    margin-top: 1rem;
  }
`;
export const Post = styled(Button)`
  margin: 30px 0;
  align-self: flex-end;
`;

export const Select = styled.select`
  background: #fff;
  border: solid 1px #843035;
  border-radius: 5px;
  width: 50%;
  padding: 0.5rem;
  font-size: 18px;
  font-family: "Acme", sans-serif;
  color: #843035;
  margin-bottom: 90px;

  @media (min-width: 1200px) {
    width: 70%;
    margin-bottom: 20px;
  }

  @media (min-width: 800px) {
    width: 50%;
    margin-bottom: 10px;
  }

  @media (min-width: 600px) {
    width: 30%;
  }
`;
export const Option = styled.option`
  border: none;
  padding: 0.5rem;
  font-size: 16px;
  font-family: "Acme", sans-serif;
  background: #b0c4de;
  color: rgba(0, 0, 0, 0.88);

  &:hover,
  &:focus {
    color: #546c84;
    background-color: #fbfbfb;
  }
`;
export const InputImg = styled.input`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
`;
export const Label = styled.label`
  width: max-content;
  color: white;
  background: #00008b;
  border: none;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  outline: none;
`;