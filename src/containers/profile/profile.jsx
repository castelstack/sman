import React from "react";
import Bg from "../../images/bg.svg";
import Join from "../../images/join.png";
import { HeadText, SmText } from "../../constant/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WorkIcon from "@material-ui/icons/Work";
import styled from "styled-components";

const Container = styled.div`
  background: url(${Bg});
  background-postion: cover;

  display: grid;
  grid-template-rows: 1fr repeat(3, min-content);
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

const AvatarName = styled.div`
  display: grid;
  grid-template-rows: 1fr repeat(2, min-content);
  justify-items: center;
  grid-gap: 0px;
`;

const PositionBranch = styled.div`
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

const Name = styled(HeadText)``;
const Image = styled.img`
  border-radius: 10rem;
  height: 10rem;
  width: 10rem;
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

const Position = styled(SmText)`
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

const Branch = styled(SmText)`
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

const Oath = styled(SmText)`
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

const Sign = styled(SmText)`
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

const StyName = styled.span`
font-size: 30px;

font-weight: 600px;
text-transform: uppercase;

@media only screen and (max-width: 800px) {
  font-size: 16px;
  
  
}
@media only screen and (max-width: 620px) {
  font-size: 15px;
  
}

@media only screen and (max-width: 500px) {
  font-size: 14px;
 
}
`

const ProfilePage = () => {
  return (
    <Container>
      <AvatarName>
        <Image src={Join} />
              <Name> Sty Joshua Peter</Name>
              <StyName>ID 21356789</StyName>
      </AvatarName>

      <PositionBranch>
        <Position>
          <WorkIcon color='primary' />
          Position: Developer
        </Position>
        <Branch>
          <LocationOnIcon color='action' />
          Branch: Lagos
        </Branch>
      </PositionBranch>
      <Oath>
              Oath: I <StyName>Joshua Peter</StyName>, solemnly swear, to uphold the diginty of this
              association with due diligence, to NEVER give SHISHI in any form
              finacial exploitation to the other gender.to respect and uphold the
              constitution of this great association. So help me God.
      </Oath>
          <Sign>
              Sign: Mgt.
          </Sign>
    </Container>
  );
};

export default ProfilePage;
