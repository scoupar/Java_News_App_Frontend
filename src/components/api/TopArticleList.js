import React from 'react';
import TopArticle from './TopArticle';

const TopArticleList = ({articles}) => {

    const topArticleListItems = articles.map((article, index) => {
        return (
            <div className="list-item transparent-box in-from-bottom">
                <li key={index}>
                    <TopArticle article = {article}/>
                </li>
            </div>
        )
    })

    return (
        <div className="top-article-list">
            <ul>
                {topArticleListItems}
            </ul>
        </div>
    )
}

export default TopArticleList;