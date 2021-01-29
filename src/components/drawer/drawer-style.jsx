import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Container = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;
export const LogOut = styled.button`


border: none;
font-size: 14px;
background: red;
color: #fff;
padding: .9rem;

`

export const Link = styled(NavLink)`
  font-family: "Nunito Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 42px;
  color: #18191f;
  text-align: center;
  text-decoration: none;
  
 
  &:Hover{
    color:  activeStyle={active}#843035;
  }
`;

export const active = {
  color: "#843035",
};

export const LogoBox = styled(NavLink)`
  margin: 30px;
  text-align: center;
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;