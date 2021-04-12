import React from 'react';

const TopArticle = ({article}) => {

    if(!article){
        return <p>Loading...</p>
    }

    if(article.urlToImage === null){
        return <div className = 'article-item'>          
        <h3>{article.title}</h3>
        <img src="http://localhost:3000/images/news_image.jpg" height="120" alt="news image" />
        <br></br>
        <p>{article.description}</p>
        <button className="top-stories-button"><a target="_blank" href={article.url}>Read more</a></button>
        </div>          
    }

    const url = '/articles/' + article.id; 

    return (
        <div className = 'article-item'>          
            <h3>{article.title}</h3>
            <img src={article.urlToImage} height="120" alt="news image"/>
            <br></br>
            <p>{article.description}</p>
            <button className="top-stories-button"><a target="_blank" href={article.url}>Read more</a></button>
        </div>
    )
}

export default TopArticle;