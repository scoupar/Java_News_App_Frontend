import React from 'react';
import Article from "./Article";
import {Link} from 'react-router-dom'

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