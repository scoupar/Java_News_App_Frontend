import React from 'react';

const HomepageArticle = ({article}) => {

    if(!article){
        return <p>Loading...</p>
    }

    return (
        <div className = 'homepage-article-item'> 
            <div id="homepage-article-title">        
                <p>{article.title}</p>
            </div> 
            <div id="homepage-article-image">
                <img src={article.urlToImage} height="250" alt="news image"/>
            </div>
            <div id="homepage-article-button">
                <button><a target="_blank" href={article.url}>Read more</a></button>
            </div>
        </div>
    )
}

export default HomepageArticle;