import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CategoryIcon from '@material-ui/icons/Category';
import { SmText } from "../../constant/styles";
import { NavLink, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`

    display: none;
   
     
    
  
  @media only screen and (max-width: 500px) {
    display: block;
    margin: 0 40px;
  }
  
  @media only screen and (max-width: 400px) {
   
    margin: 0 20px;
  }`;

const Navi = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  grid-gap: 10px;
  margin: 0 0px;

  
`;

const active = {
  color: "white",
  background: "#843035",
};

const NavLinks = styled(NavLink)`
  width: 130px;
  height: 43px;
  text-decoration: none;
  font-size: 16px;
  color: #843035;
  border: 1px solid #843035;
  box-sizing: border-box;
  border-radius: 65px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    width: 120px;
    height: 40px;
  }

  @media only screen and (max-width: 800px) {
    width: 110px;
    height: 38px;
  }
  @media only screen and (max-width: 620px) {
    width: 90px;
    height: 38px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 12px;
  }
`;


export default function MobileTags() {

  const [open, setOpen] = React.useState(false);
  

  const { url} = useRouteMatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Button style={{color: '#843035'}} onClick={handleClickOpen}>Category <CategoryIcon/></Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Category</DialogTitle>
        <DialogContent>
        <Navi>
        <NavLinks to={`${url}/urgent2k`} activeStyle={active}>
         Urgent 2k
        </NavLinks>
        <NavLinks to={`${url}/transport`} activeStyle={active}>
        Transport
        </NavLinks>
        <NavLinks to='2k'>
          Urgent 2k
        </NavLinks>
        <NavLinks to='2k'>
          Urgent 2k
        </NavLinks>
        <NavLinks to='2k'>
          Urgent 2k
        </NavLinks>
        <NavLinks to='2k'>
          Urgent 2k
        </NavLinks>
      </Navi>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}