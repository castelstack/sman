import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ActiveContext = createContext({
  userActive: false,

  userInfo: undefined,
});

export const ActiveProvider = ({ children }) => {
  const [userActive, setUserActive] = useState(false);

  const [userInfo, setUserInfo] = useState({
    firstName: "<name>",

    smanID: "<smanID>",

    position: "<position>",

    branch: "<branch>",
  });

  // api call with axios in useEffect hook
  useEffect(() => {
    const URL = "https://smanhq.herokuapp.com/";

    // const URL = "http://127.0.0.1:5000/";
    axios
      .get(`${URL}api/v1/users/me`, { withCredentials: true })
      .then((res) => {
        if (res.data.status === "SUCCESS") {
          setUserActive(true);
          setUserInfo(res.data.user);
        }
      })
      .catch(() => {
        console.log("You Are Not Currently Logged In 😭😭😭");
      });
  }, []);
  return (
    <ActiveContext.Provider
      value={{ userActive, setUserActive, userInfo, setUserInfo }}
    >
      {children}
    </ActiveContext.Provider>
  );
};
