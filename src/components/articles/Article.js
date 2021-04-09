import React from 'react';

const Article = ({article}) => {

    if(!article){
        return <p>Loading...</p>
    }

    const url = '/articles/' + article.id; 

    return (
        <div className = 'article-item'>
            <p>{article.articleTitle}</p>
            <p>{article.body}</p>
            <p>{article.date}</p>
            <p>{article.journalist.name}</p>
            <p>{article.category}</p>

        </div>
    )
}

export default Article;