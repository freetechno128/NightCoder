import React from 'react';
import { Articles } from '../../../articles/Articles'
import ArticleCard from './ArticleCard';
import './index.scss'
const ArticlesList = () => (
        <div className="row d-flex cards m-4">
            { Articles.map((el, index)=> (
                <div className="col-sm-12 col-md-6 col-lg-4 my-4 align-items-stretch">
                    <ArticleCard 
                        image={el.image}
                        date={el.date} 
                        title={el.title} 
                        content={el.content} 
                        key={index}
                    />
                </div>
            ))}
        </div>
);

export default ArticlesList;