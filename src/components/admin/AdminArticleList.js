import React from 'react';
import AdminArticle from './AdminArticle';

const AdminArticleList = ({articles}) => {

    const adminArticleListItems = articles.map((article, index) => {   
        return (
            <div className="admin-article-list">
            <li>
               <AdminArticle article = {article}/> 
            </li>
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