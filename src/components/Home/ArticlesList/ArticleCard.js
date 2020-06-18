import React from 'react'
import styled from 'styled-components';

const Type = styled.div`

  
`;

const Date = styled.div`
  
`;

const Title = styled.div`
  
`;

const ContentPreview = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;

`;

const Container = styled.div`
  max-width: 600px;
  margin: 20px;
  padding: 30px 20px;
  border-radius: 10px;
  background: #000;
  color: #fff;
`;

const ArticleCard = (props) => {
    return (
        <Container>
            <Type>{props.type}</Type>
            <Date>{props.date}</Date>
            <Title>{props.title}</Title>
            <ContentPreview>{props.content}</ContentPreview>
        </Container>
    )
}

export default ArticleCard;