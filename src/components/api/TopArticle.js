import React from 'react';

const TopArticle = ({article}) => {

    if(!article){
        return <p>Loading...</p>
    }

    const url = '/articles/' + article.id; 

    return (
        <div className = 'article-item'>          
            <p>{article.title}</p>
            <img src={article.urlToImage} height="120" alt="news image"/>
            <br></br>
            <p>{article.description}</p>
            <button><a target="_blank" href={article.url}>Read more</a></button>
        </div>
    )
}

export default TopArticle;