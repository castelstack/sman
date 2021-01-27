import styled from "styled-components";
import { HeadText } from "../../constant/styles";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import Button from "../../components/button/button";
import HttpsOutlinedIcon from "@material-ui/icons/HttpsOutlined";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';
import bg from "../../images/bg.svg";

export const Person = styled(PersonIcon)`
  transform: translateX(2rem);
  margin-right: -3px;
  color: white;
`;

export const Icon = styled(PersonOutlineOutlinedIcon)`
  transform: translateX(2rem);
  margin-right: -3px;
  color: white;
`;
export const Email = styled(EmailOutlinedIcon)`
  transform: translateX(2rem);
  margin-right: -3px;
  color: white;
`;

export const VerifiedUser = styled(VerifiedUserIcon)`
  height: 4rem;
  width: 8rem;
  color: #FCEA4A;
`;

export const LocationOn = styled(LocationOnIcon)`
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

export const ContiuneButton = styled(Button)`
  margin-left: 1.5rem;
`;

export const Img = styled.img`
  @media only screen and (max-width: 1200px) {
    width: 20rem;
  }

  @media only screen and (max-width: 900px) {
    width: 20rem;
  }

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
export const Container = styled.div`
  margin: 15px 99px;

  @media only screen and (max-width: 1200px) {
    margin: 20px 70px;
  }

  @media only screen and (max-width: 900px) {
    margin: 20px 60px;
  }

  @media only screen and (max-width: 800px) {
    margin: 20px 40px;
  }
  @media only screen and (max-width: 620px) {
    margin: 20px 20px;
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
export const ForgotPass = styled.button`
  font-size: 13px;
  color: #fcea4a;
  border: none;
  padding: 10px;
  background: #843035;
`;
export const FormContainer = styled.div`
  background: #843035;
  padding:10px 10px 80px 10px;
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-gap: 10px;
  background-image: url(${bg});
background-repeat: no-repeat;
background-position: 95% 95%;

  @media only screen and (max-width: 1200px) {
    padding: 0 20px;
  }

  @media only screen and (max-width: 900px) {
    padding: 0 20px;
  }

  @media only screen and (max-width: 800px) {
    padding: 20px;
    justify-items: center;
  }
  @media only screen and (max-width: 620px) {
    padding: 10px;
    justify-items: center;
  }
`;
export const Form = styled.form`
display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
`;

export const Text = styled(HeadText)`
  color: white;

  @media only screen and (max-width: 500px) {
    text-align: center;
  }
`;

export const BeStingy = styled(HeadText)`
font-family: 'Acme', sans-serif;
  color: white;
  text-align: center;
  padding: 30px 0;
  @media only screen and (max-width: 500px) {
    text-align: center;
  }
`;

export const Box = styled.div`
  display: flex;
  
  align-items: center;
  margin-right: 0.7rem;
  justify-self: ${(props) => (props.end ? "flex-end" : "none")};
  color: white;
`;

export const InputField = styled.input`
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
