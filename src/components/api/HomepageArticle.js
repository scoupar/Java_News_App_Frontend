import React from 'react';

const HomepageArticle = ({article}) => {

    if(!article){
        return <p>Loading...</p>
    }

    if(article.urlToImage === null){
        return <div className = 'homepage-article-item'> 
        <div id="homepage-article">
            <div className="title-container">      
        <h2 className="homepage-article-title">{article.title}</h2>
            </div> 
        <div id="homepage-article-image">
        <img src="http://localhost:3000/images/news_image.jpg" height="300" alt="news image" />
        </div>
        </div> 
        <div id="homepage-article-button">
        <button className="button"><span><a href="http://localhost:3000/articles">See all news</a></span></button>
        </div>
        </div>    
    }

    return (
        <div className = 'homepage-article-item'> 
            <div id="homepage-article">        
                <h2 className="homepage-article-title">{article.title}</h2>
            <div id="homepage-article-image">
                <img src={article.urlToImage} height="300" alt="news image"/>
            </div>
            </div>
            <div id="homepage-article-button">
                <button className="button"><span><a target="_blank" href="http://localhost:3000/articles">See all news</a></span></button>
            </div>
        </div>
    )
}

export default HomepageArticle;