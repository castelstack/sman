import { TextField } from "@material-ui/core";
import React from "react";
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
  return (
    <Container>
      <HeadText>Check Membership Status</HeadText>
      <SmText>Input your sman id to check your membership status</SmText>
      <TextField placeholder='SMAN id number' />
      <Button value='Check' style={{ marginTop: "2rem" }} />
      {/* result will be displayed here and it will be set to show after check has been done*/}
      <Result>
        <HeadInfo>
          <VerifiedUserIcon
            style={{ height: "4rem", width: "4rem", color: "green" }}
          />
          <HeadText>You're Stingy</HeadText>
          <MedText>Sty Josh Wence </MedText>
          <SmText>
            SMAN ID: <Span>i04978676</Span>
          </SmText>
        </HeadInfo>
        <Info>
          <SubInfo>
            <SmText style={{ color: "grey" }}>POSITION</SmText>
            <MedText>Member</MedText>
          </SubInfo>
          <SubInfo>
            <SmText style={{ color: "grey" }}>BRANCH</SmText>
            <MedText>Enugu</MedText>
          </SubInfo>
        </Info>
      </Result>
      {/* result for not a member */}
      <ResultNotMember>
        <ErrorIcon style={{ height: "4rem", width: "4rem", color: "red" }} />
        <MedText>You're not a member kindly register!!!</MedText>
      </ResultNotMember>
    </Container>
  );
};

export default Check;
