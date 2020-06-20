import React from 'react'
import './FreshArticleCard.scss';

const FreshArticleCard = (props) => {
    return (
        <React.Fragment>
        <img className="fresh-article-card__image" src={props.image} alt="preview" />
        <div className="fresh-article-card">
            <div className="fresh-article-card__title">{props.title}</div>
            <div className="fresh-article-card__date">{props.date}</div>
            <div className="fresh-article-card__content">{props.content}</div>
            <div className="fresh-article-card__more">READ MORE ...</div>
        </div>
        </React.Fragment>
    )
}

export default FreshArticleCard;