import React from 'react';
import FreshArticleBanner from './FreshArticleBanner';
import ArticlesList from './ArticlesList';

const Home = () => {
    return (
        <React.Fragment>
            <FreshArticleBanner />
            <ArticlesList />
        </React.Fragment>
    )
};

export default Home;