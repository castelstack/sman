import React from "react";
import Join from "../../images/join.png";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WorkIcon from "@material-ui/icons/Work";
import {
  Container,
  AvatarName,
  Image,
  StyName,
  Branch,
  Oath,
  Sign,
  Name,
  PositionBranch,
  Position,
} from "./profile-style";

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
        Oath: I <StyName>Joshua Peter</StyName>, solemnly swear, to uphold the
        diginty of this association with due diligence, to NEVER give SHISHI in
        any form finacial exploitation to the other gender.to respect and uphold
        the constitution of this great association. So help me God.
      </Oath>
      <Sign>Sign: Mgt.</Sign>
    </Container>
  );
};

export default ProfilePage;
