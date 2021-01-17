import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../../components/logo/logo';
import { Link } from "react-router-dom";
import Button from '../../components/button/button';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";





const active = {
  borderBottom: '2px solid #843035'
  
};
const HeaderLogo = styled(Logo)`
margin-right: auto;`;

const HeaderLink = styled(NavLink)`
font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
/* identical to box height */

text-decoration: none;
color: #4D4B4B;
transition: all .5s ease-out; 


@media only screen and (max-width: 1050px) {
  display: none;
}

 
`;

const HeaderLinks = styled.div`
display: grid;
grid-template-columns: repeat(3, max-content);
grid-gap: 138px;
align-items: center;

@media only screen and (max-width: 1050px) {
  grid-template-columns: 1fr;
}
@media only screen and (max-width: 620px) {
 
  grid-template-columns: 1fr;
  justify-items: flex-end;
}

@media only screen and (max-width: 400px) {
  grid-gap: 60px;
  display: none;
}
`;

const Appbarr = styled(AppBar)`
padding: 0 99px;

@media only screen and (max-width: 800px) {
  padding: 0 60px;
}
@media only screen and (max-width: 620px) {
  padding: 0 40px;
}

@media only screen and (max-width: 400px) {
  padding: 0 62px;
}
`;

const Toolbarr = styled(Toolbar)`

display: grid;
grid-template-columns: repeat(2, max-content);

justify-content: space-between;

@media only screen and (max-width: 800px) {
  padding: 0 60px;
}
@media only screen and (max-width: 620px) {
  grid-gap: 40px;
}

@media only screen and (max-width: 400px) {
  grid-gap: 20px;
}
`;

const useStyles = makeStyles((theme) => ({
  root: {
        flexGrow: 1,
        
    },
    appBar: {
        backgroundColor: 'white',
        padding: '0 99px',
        boxShadow: 'none',
    }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Appbarr position="static" className={classes.appBar}>
        <Toolbarr>
          <Link to="/">
          <HeaderLogo />
          </Link>
                  <HeaderLinks>
                      <HeaderLink to='/rules-and-regulation' activeStyle={active}>Rules & Regulation</HeaderLink>
                      <HeaderLink to='/gist' activeStyle={active}>Stingy gists</HeaderLink>
                      <Button to='/rules-and-regulation' value='Generate Card'/>
                  </HeaderLinks>
        </Toolbarr>
      </Appbarr>
    </div>
  );
}