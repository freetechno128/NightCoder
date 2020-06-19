import React from 'react';
import { Articles } from '../../../articles/Articles'
import ArticleCard from './ArticleCard';
import './index.scss'
const ArticlesList = () => (
    <div className="container">
        <div className="row d-flex cards ">
            { Articles.map((el, index)=> (
                <div className="col-sm-6 col-md-6 col-lg-4 my-4 px-4 align-items-stretch">
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
    </div>
);

export default ArticlesList;