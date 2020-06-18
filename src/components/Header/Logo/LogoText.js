import React from 'react'
import styled from 'styled-components';

const StyledText = styled.div`
	color: white;
    margin-left: 14px;
    font-size: 30px;
    font-weight: 700;
    font-family: 'BalsamiqSans', sans-serif;
`;

const LogoText = () => {
    return <StyledText>Night Coder</StyledText>;
}

export default LogoText;