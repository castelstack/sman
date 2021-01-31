import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
export const ActiveContext = createContext();
export const UserContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [userActive, setUserActive] = useState(false);
  const [userInfo, setUserInfo] = useState({
  });
  const URL = "https://smanhq.herokuapp.com/";

  // api call with axios in useEffect hook
  useEffect(() => {
    (async () => {
      await axios
        .get(`${URL}api/v1/users/me`, { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          setUserInfo(res.data.user)
          res.data.user.active === true ? setUserActive(true) : setUserActive(false);
        })
        setUserActive(true)
      console.log(userActive);
    })();
  });
  


  //  // api call with axios in useEffect hook
  //  useEffect(() => {
  //   (async () => {
  //     await axios
  //     .post(`${URL}api/v1/users/logout`)
  //     .then((res) => {
  //       console.log(res.data);
  //       res.data.status === "SUCCESS"
  //         ? setUserActive(false)
  //         : alert("you're not log out");
  //     })
  //     .catch((err) => {
  //       // err msg
  //       alert(err.response.message);
  //     });
  // })();
  // },[userActive]);
  // console.log(userActive)
  return (
    <ActiveContext.Provider value={{ userActive, setUserActive, userInfo, setUserInfo }}>
      {children}
    </ActiveContext.Provider>
  );
};

