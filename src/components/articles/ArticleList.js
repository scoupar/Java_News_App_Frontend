import React from 'react';
import Article from './Article';


const ArticleList = ({articles, input:keyword, onChange:setKeyword}) => {

    const articleListItems = articles.map((article, index) => {   
        return (
            <div className="list-item transparent-box in-from-bottom">
            <li>
               <Article article = {article}/> 
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
        placeholder={"search article"}
        onChange={(e) => setKeyword(e.target.value)}
        />
        <div className = "article-list">
         
        <ul>
            {articleListItems}
        </ul>
        
        </div> 
        </>   
    )
}

export default ArticleList;