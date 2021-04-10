import React from 'react';
import {Link} from 'react-router-dom';
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
        <div className="article-list">
            <ul>
                {topArticleListItems}
            </ul>
        </div>
    )
}

export default TopArticleList;