import React from 'react';
import {Link} from 'react-router-dom';

const Article = ({article}) => {

    if(!article){
        return <p>Loading...</p>
    }

    const url = '/articles/' + article.id; 

    return (
        <>
        <Link to={url}>
        <div className = 'article-item'>          
            <h3>{article.articleTitle}</h3>
            <img src = {article.image} alt="description" height="140"/>
            <p>{article.intro}</p>
            <h4>{article.date}</h4>
            <button className="top-stories-button"><a target="_blank" href={url}>Read more</a></button>   
        </div>
        </Link>
        </>
    )
}

export default Article;