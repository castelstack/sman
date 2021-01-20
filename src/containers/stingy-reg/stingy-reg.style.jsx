import styled from "styled-components";
import { HeadText } from "../../constant/styles";

import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import Button from "../../components/button/button";
import HttpsOutlinedIcon from "@material-ui/icons/HttpsOutlined";

export const Icon = styled(PersonOutlineOutlinedIcon)`
  transform: translateX(2rem);
  margin-right: -3px;
  color: white;
`;
export const Position = styled(EmailOutlinedIcon)`
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 00px) {
    grid-template-columns: 1fr;
  }
`;

export const Form = styled.div`
  background: #843035;
  padding: 90px;
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-gap: 30px;

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
  }
`;
