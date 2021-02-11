import styled from "styled-components";
import { HeadText, SmText } from "../../constant/styles";
import Logout from "../../components/logout/logout";
import Bg from "../../images/bg.svg";
export const Container = styled.div`
  background: url(${Bg});
  background-postion: cover;

  display: grid;
  grid-template-rows: 1fr repeat(4, min-content);
  grid-gap: 70px;
  margin: 56px 99px;
  padding: 50px 0;

  @media only screen and (max-width: 1200px) {
    margin: 76px 99px;
  }

  @media only screen and (max-width: 900px) {
    margin: 66px 60px;
  }

  @media only screen and (max-width: 800px) {
    margin: 56px 40px;
  }
  @media only screen and (max-width: 620px) {
    margin: 46px 20px;
  }
`;

export const AvatarName = styled.div`
  display: grid;
  grid-template-rows: 1fr repeat(2, min-content);
  justify-items: center;
  grid-gap: 0px;
`;

export const PositionBranch = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: space-between;
  margin: 0 99px;

  @media only screen and (max-width: 900px) {
    margin: 0 60px;
  }

  @media only screen and (max-width: 800px) {
    margin: 0 40px;
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin: 0 20px;
  }
`;

export const Name = styled(HeadText)`
text-transform: capitalize;`;
export const Image = styled.img`
  border-radius: 10rem;
  height: 9rem;
  width: 9rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  margin-bottom: 20px;
  // clip-path: polygon(
  //     0 10%,
  //     10% 0,
  //     90% 0,
  //     100% 10%,
  //     100% 90%,
  //     90% 100%,
  //     10% 100%,
  //     0% 90%,
  //     0% 10%
  //   )
`;

export const Position = styled(SmText)`
  font-size: 30px;
  display: grid;
  text-transform: capitalize;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 10px;
  align-items: center;

  @media only screen and (max-width: 800px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 620px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
export const Cap = styled(SmText)`
  text-transform: capitalize;
`;

export const Branch = styled(SmText)`
  text-transform: capitalize;
  font-weight: 400;
  font-size: 30px;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 10px;
  align-items: center;

  @media only screen and (max-width: 800px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 620px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export const Oath = styled(SmText)`
  font-size: 30px;
  padding: 0 100px;
  font-weight: 300px;

  @media only screen and (max-width: 800px) {
    font-size: 16px;
    line-height: 25px;
    padding: 0 50px;
  }
  @media only screen and (max-width: 620px) {
    font-size: 15px;
    padding: 0 30px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 14px;
    padding: 0 20px;
  }
`;

export const LogOut = styled(Logout)`
  width: 10rem;
  margin: 0 100px;

  &:hover {
    box-shadow: 5px 8px 9px -10px rgba(0, 0, 0, 0.4);
    transform: translateY(-0.6px);
  }
  &:active {
    transform: translateY(0.6px);
  }
`;

export const Sign = styled(SmText)`
  font-size: 30px;
  padding: 0 100px;
  font-weight: 500px;
  justify-self: flex-end;

  @media only screen and (max-width: 800px) {
    font-size: 16px;
    line-height: 25px;
    padding: 0 50px;
  }
  @media only screen and (max-width: 620px) {
    font-size: 15px;
    padding: 0 30px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 14px;
    padding: 0 20px;
  }
`;

export const StyName = styled(SmText)`
  font-size: 30px;

  font-weight: 600px;
  text-transform: capitalize;

  @media only screen and (max-width: 800px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 620px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
