import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
export const ActiveContext = createContext(false);
export const UserContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [userActive, setUserActive] = useState(false);

  const URL = "https://smanhq.herokuapp.com/";

  // api call with axios in useEffect hook
  useEffect(() => {
    (async () => {
      await axios
        .get(`${URL}api/v1/users/me`)
        .then((res) => {
          console.log(res.data);
          res.data.user.active ? setUserActive(true) : setUserActive(false);
        })
        
      console.log(userActive);
    })();
  });
  console.log(userActive)

  return (
    <ActiveContext.Provider value={{ userActive, setUserActive }}>
      {children}
    </ActiveContext.Provider>
  );
};



export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    position: "member",
    branch: "",
    lastName: "",
  });

  const URL = "https://smanhq.herokuapp.com/";

  // api call with axios in useEffect hook
  useEffect(() => {
    (async () => {
      await axios
        .get(`${URL}api/v1/users/me`, { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          setUserInfo(res.data);
        });
    })();
  });

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};