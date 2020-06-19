import React from 'react'
import LogoIcon from './LogoIcon';
import LogoText from './LogoText';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    &::after {
        content: "";
        margin-left: 6px;
        margin-top: 14px;
        height: 6px;
        width: 14px;
        background-color: rgb(255,120, 145);
    }
`;


const Logo = () => {
    return (
        <Container>
            <LogoIcon />
            <LogoText />
        </Container>
    )
}

export default Logo;