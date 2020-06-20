import React from 'react';
import FreshArticleBanner from './FreshArticleBanner';
import ArticlesList from './ArticlesList';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0px 20px;
`;


const Blog = () => {
    return (
        <React.Fragment>
            <FreshArticleBanner />
            <Container>
                <ArticlesList />
            </Container>
        </React.Fragment>
    )
};

export default Blog;