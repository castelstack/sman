import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import './error.css'

const GoHome = styled(Link)`

    font-family: 'Montserrat', sans-serif;
    display: inline-block;
    font-weight: 700;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    padding: 13px 23px;
    background: #843035;
    font-size: 18px;
    border-radius: 10rem;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
  
  
  &:hover {
    color: black;
    background: #FCEA4A;
  }`
const Error = () => {
  return (
    <div>
     
     <div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1>Oops!</h1>
				<h2>404 - The Page can't be found</h2>
			</div>
			<GoHome to="/">Go Home</GoHome>
		</div>
	</div>
    </div>
  );
};

export default Error;
