import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
export const ActiveContext = createContext();
export const UserContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [userActive, setUserActive] = useState(false);
  const [userInfo, setUserInfo] = useState({
  });
  

  // api call with axios in useEffect hook
  useEffect(() => {
    
    const URL = "https://smanhq.herokuapp.com/";
    axios
    .get(`${URL}api/v1/users/me`, { withCredentials: true })
    .then((res) => {
      console.log(res.data);
      setUserInfo(res.data.user)
      setUserActive(res.data.user.active);
      console.log(res.data.user.active)
    })
    
  }, [setUserInfo, setUserActive]);
  return (
    <ActiveContext.Provider value={{ userActive, setUserActive, userInfo, setUserInfo }}>
      {children}
    </ActiveContext.Provider>
  );
};

