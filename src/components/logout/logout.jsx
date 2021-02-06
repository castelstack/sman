import React, { useContext } from "react";
import axios from "axios";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import message from "../../constant/response";
import { useHistory } from "react-router-dom";
import { ActiveContext } from "../../utils/store";
import styled from "styled-components";

const LogOut = styled.button`
  width: 100%;
  border: none;
  font-size: 14px;
  background: red;
  color: #fff;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 5px 8px 9px -10px rgba(0, 0, 0, 0.4);
    transform: translateY(-0.6px);
  }
  &:active {
    transform: translateY(0.6px);
  }
`;
const Logout = (props) => {
  //const [user, setUser] = useState([]);
  const isActive = useContext(ActiveContext);

  let history = useHistory();

  const URL = "https://smanhq.herokuapp.com/";

  const handleClick = () => {
    axios
      .post(`${URL}api/v1/users/logout`, null, { withCredentials: true })
      .then((res) => {
        if (res.data.status === "SUCCESS") {
          history.push("/");

          isActive.setUserActive(false);

          isActive.setUserInfo(undefined);
        }
      })
      .catch((err) => {
        // err msg
        console.log(message(err));
      });
  };

  return (
    <div>
      <LogOut onClick={handleClick}>
        Log out <ExitToAppIcon />
      </LogOut>
    </div>
  );
};

export default Logout;
