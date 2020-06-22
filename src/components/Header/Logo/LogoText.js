import React from 'react'
import styled from 'styled-components';

const StyledText = styled.div`
    margin-left: 14px;
    font-size: 30px;
    font-weight: 700;
    font-family: 'MuseoModerno', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    color: white;


`;

const LogoText = () => {
    return <StyledText>NightCoder</StyledText>;
}

export default LogoText;