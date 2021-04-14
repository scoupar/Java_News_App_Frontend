import React from 'react';
import TopArticle from './TopArticle';

const TopArticleList = ({articles, input:keyword, onChange:setKeyword}) => {

    const topArticleListItems = articles.map((article, index) => {
        return (
            <div className="list-item transparent-box in-from-bottom">
                <li key={index}>
                    <TopArticle article = {article}/>
                </li>
            </div>
        )
    })

    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem",margin: "100px"}

    return (
        <>
        <input
        style={BarStyling}
        key="random1"
        value={keyword}
        placeholder={"Search for article title..."}
        onChange={(e) => setKeyword(e.target.value)}
        />
        <h1 className = 'page-title'>Breaking News</h1>
        <div className="top-article-list">
            <ul>
                {topArticleListItems}
            </ul>
        </div>
        </>
    )
}

export default TopArticleList;