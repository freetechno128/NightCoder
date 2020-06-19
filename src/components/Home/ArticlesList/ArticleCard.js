import React from 'react'
import './ArticleCard.scss';

const ArticleCard = (props) => {
    return (
        <div className="card">
            <img className="card__image" src={props.image} alt="preview" />
            <div className="card__title">{props.title}</div>
            <div className="card__date">{props.date}</div>
            <div className="card__content">{props.content}</div>
        </div>
    )
}

export default ArticleCard;