import React from 'react';
import AdminArticle from './AdminArticle';

const AdminArticleList = ({articles, onDelete}) => {

    const adminArticleListItems = articles.map((article, index) => {   
        return (
            <div className="admin-article-list">
            <ul>
            <li>
               <AdminArticle article = {article}/> 
            </li>
            </ul>
            </div>
        ) 
    })



    return (
        <div className="admin-article-list">
            <ul>
                {adminArticleListItems}
            </ul>

        </div>
        
    )
}

export default AdminArticleList;