import React from 'react';

const ArticleDetail = ({article}) => {

    if(!article){
        return <p>Loading...</p>
    }
    return (
        <div className = "article-detail">
            <p>{article.body}</p>
        </div>
    )
}

export default ArticleDetail;