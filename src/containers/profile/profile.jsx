import React, { useContext } from "react";
import Avatar from "../../images/avatar.svg";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WorkIcon from "@material-ui/icons/Work";
import { ActiveContext } from "../../utils/store";

import {
  Container,
  AvatarName,
  Image,
  StyName,
  Branch,
  Oath,
  Sign,
  Name,
  LogOut,
  PositionBranch,
  Position,
} from "./profile-style";

const ProfilePage = ({ history }) => {
  const user = useContext(ActiveContext);

  return (
    <div>
      <Container key={user.userInfo.id}>
        <AvatarName>
          <Image src={Avatar} />
          <Name>
            Sty {user.userInfo.firstName} {user.userInfo.lastName}
          </Name>
          <StyName>SMAN ID: {user.userInfo.smanID}</StyName>
        </AvatarName>

        <PositionBranch>
          <Position>
            <WorkIcon color="primary" />
            Position: {user.userInfo.position}
          </Position>
          <Branch>
            <LocationOnIcon color="action" />
            Branch: {user.userInfo.branch}
          </Branch>
        </PositionBranch>
        <Oath>
          Oath: I{" "}
          <StyName>
            {user.userInfo.firstName} 
          </StyName>{" "}
          <StyName>
            {user.userInfo.lastName}
          </StyName>
          , solemnly swear, to uphold the dignity of this association with due
          diligence, to NEVER give SHISHI in any form of financial exploitation
          to the other gender. To respect and uphold the constitution of this
          great association. So help me God.
        </Oath>
        <Sign>Sign: Mgt.</Sign>
        <LogOut history={history} />
      </Container>
    </div>
  );
};

export default ProfilePage;
