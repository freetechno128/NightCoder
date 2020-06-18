import React from 'react'
import LogoIcon from './LogoIcon';
import LogoText from './LogoText';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
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