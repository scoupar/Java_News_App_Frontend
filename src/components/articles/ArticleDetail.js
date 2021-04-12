import React from 'react';

const ArticleDetail = ({article}) => {

    if(!article){
        return <p>Loading...</p>
    }
    return (
        <div className = "article-detail">
            <h2>{article.articleTitle}</h2>
            <img src = {article.image} alt="description" height="500"/>
            <div className="article-detail-body-text">
            <h5 id="article-detail-journalist">By {article.journalist.name}</h5>
            <p className="far fa-clock">{article.date}</p>
            <h4>{article.intro}</h4>
            <hr className="second-hr"></hr>
            <p>{article.body}</p>
            </div>
        </div>
    )
}

export default ArticleDetail;