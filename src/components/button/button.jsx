import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
width: ${props => (props.big ? '235px' : '139px')};
height: ${props => (props.big ? '58px' : '38px')};


border: none;
background: ${props => (props.choco ? '#843035' : '#FCEA4A')};
border-radius: 10rem;
font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: ${props => (props.big ? '20px' : '15px')};
line-height: 33px;
outline: none;
color: ${props => (props.choco ? '#fff' : '#4D4B4B')};

&:hover {
    
    box-shadow: 5px 8px 9px -10px rgba(0,0,0,0.4);
    transform: translateY(-.6px);
}
`;

const Button = ({onClick, to, value, ...props}) => {
    return (
        <div>
            <CustomButton onClick={onClick} to={to} {...props} >
{value}
            </CustomButton>
        </div>
    );
};

export default Button;