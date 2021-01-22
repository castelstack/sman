import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Logo from "../../components/logo/logo";

export const Container = styled.div``;

export const active = {
  borderBottom: "2px solid #843035",
};

export const HeaderLogo = styled(Logo)`
  margin-right: auto;
`;

export const HeaderLink = styled(NavLink)`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  text-decoration: none;
  color: #4d4b4b;
  transition: all 0.5s ease-out;

  @media only screen and (max-width: 900px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 650px) {
    font-size: 13px;
  }
`;

export const ButtonLink = styled(NavLink)`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  text-decoration: none;
  color: #4d4b4b;
  transition: all 0.5s ease-out;

  @media only screen and (max-width: 1000px) {
   display: none;
  }
 
`;

export const HeaderLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-gap: 138px;
  align-items: center;
  @media only screen and (max-width: 1200px) {
    grid-gap: 60px;
    
  }

  @media only screen and (max-width: 1000px) {
    grid-gap: 60px;
    grid-template-columns: repeat(3, max-content);
  }
  @media only screen and (max-width: 900px) {
    grid-gap: 50px;
  }
  @media only screen and (max-width: 800px) {
    grid-gap: 30px;
  }

  @media only screen and (max-width: 800px) {
    grid-gap: 20px;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Appbarr = styled.div`
  padding: 0 99px;

  @media only screen and (max-width: 800px) {
    padding: 0 60px;
  }
  @media only screen and (max-width: 600px) {
    padding: 0 40px;
  }

  @media only screen and (max-width: 400px) {
    padding: 0 20px;
  }
`;

export const Toolbarr = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);

  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    grid-gap: 40px;
    grid-template-columns: repeat(2, max-content);
    justify-content: space-between;
    align-items: center;
  }
`;