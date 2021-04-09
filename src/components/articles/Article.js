import React from 'react';
import {Link} from 'react-router-dom';

const Article = ({article}) => {

    if(!article){
        return <p>Loading...</p>
    }

    const url = '/articles/' + article.id; 

    return (
        <div className = 'article-item'>
            <Link to={url}>
            <p>{article.articleTitle}</p>
            </Link>
            <p>{article.date}</p>
            <p>{article.journalist.name}</p>
            <p>{article.category}</p>

        </div>

    )
}

export default Article;