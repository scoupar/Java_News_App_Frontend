import React from 'react';

const ArticleDetail = ({article}) => {

    if(!article){
        return <p>Loading...</p>
    }
    return (
        <div className = "article-detail">
            <h2>{article.articleTitle}</h2> 
            <p>By {article.journalist.name}</p>
            <img src = {article.image} alt="description" height="100"/>          
            <p>{article.body}</p>
        </div>
    )
}

export default ArticleDetail;