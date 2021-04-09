import React from 'react';
import Article from './Article';

const ArticleList = ({articles}) => {

    const articleListItems = articles.map((article, index) => {   
        return (
            <div className="list-item transparent-box in-from-bottom">
            <li>
               <Article article = {article}/> 
            </li>
            </div>
        ) 
    })



    return (
        <div className = "article-list">
        <ul>
            {articleListItems}
        </ul>
        </div>
        
    )
}

export default ArticleList;