import React from 'react';
import { Articles } from '../../../articles/Articles'
import ArticleCard from './ArticleCard';
import './index.scss'
const ArticlesList = () => (
    <div className="cards">
        { Articles.map((el, index)=> (
                <ArticleCard 
                    image={el.image}
                    date={el.date} 
                    title={el.title} 
                    content={el.content} 
                    key={index}
                />
            )
        )}
    </div>
);

export default ArticlesList;