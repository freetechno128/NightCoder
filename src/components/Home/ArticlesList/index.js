import React from 'react';
import { Articles } from '../../../articles/Articles'
import ArticleCard from './ArticleCard';

const ArticlesList = () => {
    return (
        <React.Fragment>
            { 
                Articles.map((el)=> {
                    return (
                        <ArticleCard 
                            type={el.type} 
                            date={el.date} 
                            title={el.title} 
                            content={el.content} 
                        />
                    )
                })
            }
        </React.Fragment>
    )
};

export default ArticlesList;