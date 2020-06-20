import React from 'react'
import './ArticleCard.scss';

const ArticleCard = (props) => {
    return (
        <div className="article-card">
            <img className="article-card__image" src={props.image} alt="preview" />
            <div className="article-card__title">{props.title}</div>
            <div className="article-card__date">{props.date}</div>
            <div className="article-card__content">{props.content}</div>
            <div className="article-card__more">READ MORE ...</div>
        </div>
    )
}

export default ArticleCard;