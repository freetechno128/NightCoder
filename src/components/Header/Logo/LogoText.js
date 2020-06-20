import React from 'react'
import styled from 'styled-components';

const StyledText = styled.div`
    margin-left: 14px;
    font-size: 30px;
    font-weight: 700;
    font-family: 'MuseoModerno', cursive;
    color: white;


`;

const LogoText = () => {
    return <StyledText>NightCoder</StyledText>;
}

export default LogoText;