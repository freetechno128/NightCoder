import React from 'react';
import FreshArticleCard from './FreshArticleCard';

const el = {
    title: "Create a header",
    image: "https://picsum.photos/1980/1200",
    date: "Thu, 18 Jun 2020",
    content: "Do ut eiusmod aliquip nostrud cupidatat deserunt sunt ut. Occaecat nulla commodo laborum ut exercitation labore fugiat. Labore non pariatur adipisicing sit amet ea ullamco sunt adipisicing elit ex magna ea. Exercitation aliquip Lorem sit qui adipisicing qui labore id. Qui dolore excepteur reprehenderit et velit veniam culpa consectetur adipisicing."
}

const FreshArticleBanner = () => {
    return (
        <div className="col-lg-8 col-md-12 p-0">
            <FreshArticleCard 
                image={el.image}
                date={el.date} 
                title={el.title} 
                content={el.content}
            ></FreshArticleCard>
        </div>
    )
};

export default FreshArticleBanner;