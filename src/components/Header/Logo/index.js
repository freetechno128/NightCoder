import React from 'react'
import LogoIcon from './LogoIcon';
import LogoText from './LogoText';
import styled from 'styled-components';
import { ReactComponent as MyLogo } from './wall.svg';

const Container = styled.div`
    display: flex;
    align-items: center;
    &::after {
        content: "";
        margin-left: 6px;
        margin-top: 14px;
        height: 6px;
        width: 14px;
        background-color: #00B5B5;
    }
`;

const SVGContainer = styled.div`
    filter: invert(1);
`;

const Logo = () => {
    return (
        <Container>
            <SVGContainer>
                <MyLogo height="36px" width="36px" />
            </SVGContainer>
            <LogoText />
        </Container>
    )
}

export default Logo;