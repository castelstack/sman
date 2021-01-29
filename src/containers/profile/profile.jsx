import React, { useEffect, useState } from "react";
import Join from "../../images/join.png";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WorkIcon from "@material-ui/icons/Work";
import axios from "axios";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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

const ProfilePage = ({history}) => {
  const [user, setUser] = useState([]);

console.log(user)
  const URL = "https://smanhq.herokuapp.com/";
   // api call with axios in useEffect hook
   useEffect(() => {
    (async () => {
       await axios
      .get(`${URL}api/v1/users/me`, { withCredentials: true })
      .then((res) => {
        console.log(res.data.user);
        const userInfo = res.data;
           setUser(res.data.user)
           console.log(userInfo);
      })
      console.log(user)
    })()
  });

  const handleClick = (values) => {
      axios.post(`${URL}api/v1/users/logout`)
      .then((res, req) => {
        console.log(res.data);
        console.log(req)
        res.data.status === "SUCCESS"
          ? history.push("/")
          : alert("you're not log in");
      })
      .catch((err) => {
        // err msg
        alert(err)
        //alert(err.response.data.message);
      });
  }

  return (
    <div>
     
            <Container key={user.id}>
            <AvatarName>
              <Image src={Join} />
                <Name> Sty {user.firstName} {user.lastName}</Name>
                <StyName>Sman ID: {user.id}</StyName>
            </AvatarName>
      
            <PositionBranch>
              <Position>
                <WorkIcon color='primary' />
                Position: {user.position}
              </Position>
              <Branch>
                <LocationOnIcon color='action' />
                Branch: {user.branch}
              </Branch>
            </PositionBranch>
            <Oath>
              Oath: I <StyName>{user.firstName} {user.lastName}</StyName>, solemnly swear, to uphold the
              diginty of this association with due diligence, to NEVER give SHISHI in
              any form finacial exploitation to the other gender.to respect and uphold
              the constitution of this great association. So help me God.
            </Oath>
        <Sign>Sign: Mgt.</Sign>
        <LogOut onClick={handleClick}>Log out <ExitToAppIcon/></LogOut>
            </Container>
         
      </div>
  );
};

export default ProfilePage;
