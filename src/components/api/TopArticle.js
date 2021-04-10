import React from 'react';
import {Link} from 'react-router-dom';

const TopArticle = ({article}) => {

    if(!article){
        return <p>Loading...</p>
    }

    const url = '/articles/' + article.id; 

    return (
        <div className = 'article-item'>          
            <p>{article.title}</p>
            <p>{article.description}</p>
            <img src={article.urlToImage} height="150" />
            <br></br>
            <button><a target="_blank" href={article.url}>Read more</a></button>
        </div>
    )
}

export default TopArticle;