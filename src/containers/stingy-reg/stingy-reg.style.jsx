import styled from "styled-components";
import { HeadText, SmText } from "../../constant/styles";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import Button from "../../components/button/button";
import HttpsOutlinedIcon from "@material-ui/icons/HttpsOutlined";
import PersonPinIcon from "@material-ui/icons/PersonPin";

export const FormBox = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
 
  
`;
export const Icon = styled(PersonOutlineOutlinedIcon)`
  transform: translateX(2rem);
  margin-right: -3px;
  color: white;
`;
export const Position = styled(PersonPinIcon)`
  transform: translateX(2rem);
  margin-right: -3px;
  color: white;
`;

export const Password = styled(HttpsOutlinedIcon)`
  transform: translateX(2rem);
  margin-right: -3px;
  color: white;
`;

export const Verified = styled.img`
  @media only screen and (max-width: 900px) {
    width: 10rem;
  }
`;
export const UploadBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContiuneButton = styled(Button)`
  justify-self: flex-end;
`;

export const Size = styled.div`
  width: 300;
  border-radius: 5px;
  //padding-right:.5rem;
  
`
export const Container = styled.div`
  margin: 0 99px;

  @media only screen and (max-width: 900px) {
    margin: 0 60px;
  }

  @media only screen and (max-width: 800px) {
    margin: 0 40px;
  }
  @media only screen and (max-width: 620px) {
    margin: 0 20px;
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  

  @media only screen and (max-width: 1000px) {
    grid-template-columns: max-content;
    justify-content: center;
  }

 
`;

export const Form = styled.div`
  background: #843035;
  padding: 90px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  padding: 1rem 1rem 4rem 1rem;
  justify-items: center;

  @media only screen and (max-width: 1200px) {
    padding: 0 20px;
  }

  @media only screen and (max-width: 1000px) {
    margin: 40px 0;
  }
  @media only screen and (max-width: 900px) {
    padding: 0 20px;
  }

  @media only screen and (max-width: 800px) {
    padding: 20px;
  }
  @media only screen and (max-width: 620px) {
    padding: 10px;
    justify-items: center;
    border-radius: 5px;
  }
`;

export const Text = styled(HeadText)`
  color: white;
  font-size: 36px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.7rem;
  justify-self: ${(props) => (props.end ? "flex-end" : "none")};
  color: white;
`;

export const InputFied = styled.input`
  background: #843035;
  padding: 15px 45px;

  font-size: 16px;
  line-height: 24px;

  /* for box */
  width: 100%;
  height: 20px;
  outline: 0;
  color: white;
  border-radius: 5px;
  border: none;
  border: solid 2px white;

  &::placeholder {
    color: white;
  }
  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  &:focus {
    background: rgba(0,0,0,0.5);
  }
`;
export const Uploadbutton = styled.button`
width: max-content;
color:#fff;
background:  #3f51b5;
border: none;
display: flex;
align-items: center;
padding: 5px;
border-radius: 5px;
outline: none;
`;

export const Frame = styled.div`
  border: ${(props) => (props.border ? "dotted 2px gray" : "none")};
  height: 13rem;
  width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    height: min-content;
  }
`;

export const Heading = styled(HeadText)`
  color: #fff;
  font-size: 35px;
  line-height: 3px;
  margin-top: 2rem;
  @media only screen and (max-width: 1200px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 900px) {
    font-size: 22px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
`;
export const SubHeading = styled(SmText)`
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  line-height: 3px;
`;
