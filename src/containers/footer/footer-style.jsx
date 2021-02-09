import { SmText } from "../../constant/styles";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: #0b0d17;
  display: grid;
  grid-template-rows: repeat(4, max-content);
  grid-gap: 20px;
  padding: 54px;
  @media only screen and (max-width: 650px) {
    padding: 54px  20px;
    
  }
`;
export const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Legal = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    
    justify-items: center;
    grid-gap:20px;
  }
`;
export const Socials = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-gap: 20px;
  align-items: center;
`;
export const Routes = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-gap: 20px;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
export const Links = styled(SmText)`
  color: #fff;
  @media only screen and (max-width: 650px) {
    font-size: 12px;
  }
`;
export const LinkTo = styled(Link)`
  color: #fff;
  &:hover{
    color: gray;
  }
`;
export const LogoImg = styled.img`
  height: 25px;
`;
export const SocialIcon = styled.img`
  height: 25px;
`;
export const SocialLink = styled.a``;
