import React from 'react';
import FreshArticleBanner from './FreshArticleBanner';
import ArticlesList from './ArticlesList';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 900px;
  margin: 0px 20px;
`;


const Home = () => {
    return (
        <React.Fragment>
            <FreshArticleBanner />
            <Container>
                <ArticlesList />
            </Container>
        </React.Fragment>
    )
};

export default Home;