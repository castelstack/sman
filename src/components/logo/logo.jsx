import React from 'react';
import SmanLogo from '../../images/logo.svg';
import styled from 'styled-components';

const LogoImage = styled.img`
width: 55.59px;
height: 53px;
`


const Logo = () => {
    return (
        <div>
            <LogoImage src={SmanLogo} alt="sman-logo"/>
            
        </div>
    );
};

export default Logo;