import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { SmText, HeadText, MedText } from "../../constant/styles";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Bg from "../../images/bg.svg";
import ErrorIcon from "@material-ui/icons/Error";
import styled from "styled-components";
import Button from "../button/button";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 1rem;
`;
const Result = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  padding: 2.5rem 1rem;
  grid-gap: 0.5rem;
  tetx-transform: capitalize;
  background: url(${Bg});
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
`;

const ResultNotMember = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  background: url(${Bg});
  background-repeat: no-repeat;
  background-position: center;
  padding: 2.5rem 0rem;
`;

const HeadInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 0.4rem;
`;

const SubInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;
const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: space-around;
  justify-items: center;
  grid-gap: 1rem;
  width: 100%;
  padding: 1.2rem 1rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
const Span = styled.span`
  color: green;
  font-size: 1.2rem;
`;
const Check = () => {
  const [userState, setUserState] = useState([
    {
      _id: "<_id>",

      firstName: "<name>",

      smanID: "<smanID>",

      position: "<position>",

      branch: "<branch>",
    },
  ]);

  let [isValid, setValid] = useState(undefined);

  const alert = useAlert();

  const Authenticate = (e) => {
    e.preventDefault();

    const smanID = document.getElementById("sman").value;

    axios
      .get(
        `https://smanhq.herokuapp.com/api/v1/users/?smanID=${smanID}&limit=1`,
        { withCredentials: true }
      )
      .then((res) => {
        if ((res.data.status === "SUCCESS") & (res.data.users.length >= 1)) {
          setUserState(res.data.users);
          setValid(true);
        } else {
          setValid(false);
        }
      })
      .catch((err) => alert.error(err.message));
  };

  return (
    <Container>
      <HeadText style={{fontFamily: 'Acme'}}>Check Membership Status</HeadText>
      <SmText style={{textAlign: 'center'}}>Input your sman id to check your membership status</SmText>
      <TextField id="sman" placeholder="SMAN id number" />
      <Button
        value="Check"
        style={{ marginTop: "2rem" }}
        onClick={Authenticate}
      />
      {/* result will be displayed here and it will be set to show after check has been done*/}
      {isValid === true ? (
        <Result>
          <HeadInfo>
            <VerifiedUserIcon
              style={{ height: "4rem", width: "4rem", color: "green" }}
            />
            <HeadText>Membership Status Valid</HeadText>
            <MedText>Sty {userState[0].firstName.toUpperCase()} </MedText>
            <SmText>
              SMAN ID: <Span>{userState[0].smanID}</Span>
            </SmText>
          </HeadInfo>
          <Info>
            <SubInfo>
              <SmText style={{ color: "grey" }}>POSITION</SmText>
              <MedText>{userState[0].position}</MedText>
            </SubInfo>
            <SubInfo>
              <SmText style={{ color: "grey" }}>BRANCH</SmText>
              <MedText>{userState[0].branch}</MedText>
            </SubInfo>
          </Info>
        </Result>
      ) : isValid === false ? (
        <ResultNotMember>
          <ErrorIcon style={{ height: "4rem", width: "4rem", color: "red" }} />
          <MedText>Not A Member kindly Register!!!</MedText>
        </ResultNotMember>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Check;
