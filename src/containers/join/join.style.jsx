import styled from "styled-components";
import { HeadText } from "../../constant/styles";
import Button from "../../components/button/button";
import bg from "../../images/bg.svg";
import { Link } from "react-router-dom";


export const ContiuneButton = styled(Button)`
  justify-self: center;
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
  //background: #fafafa;
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
export const ForgotPass = styled(Link)`
  font-size: 13px;
  color: #843035;
  border: none;
  padding: 10px;
  background: #fafafa;
  justify-self: flex-start;
`;
export const FormContainer = styled.div`
  background: #fafafa;
  padding: 10px 10px 80px 10px;
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
    padding:20px 0px;
    justify-items: center;
  }
  
`;
export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding:20px 20px;
  grid-gap: 25px;
  @media only screen and (max-width: 620px) {
    padding: 0 10px;
    justify-items: center;
    grid-template-columns:  1fr;
  }
`;
export const FormLogin = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  padding:20px 20px;
  grid-gap: 25px;
  @media only screen and (max-width: 620px) {
    padding: 0 10px;
    justify-items: center;
  }
`;
export const Text = styled(HeadText)`
  color: white;

  @media only screen and (max-width: 500px) {
    text-align: center;
  }
`;

export const BeStingy = styled(HeadText)`
  font-family: "Acme", sans-serif;
  color:  #843035;
  text-align: center;
  padding: 30px 0;
  @media only screen and (max-width: 500px) {
    text-align: center;
  }
`;


