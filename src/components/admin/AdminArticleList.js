import React from 'react';
import AdminArticle from './AdminArticle';

const AdminArticleList = ({articles, onDelete, article}) => {

const handleDelete = () => {
    onDelete(article.id)
}

    const adminArticleListItems = articles.map((article, index) => {   
        return (
            <div className="admin-article-list">
            <ul>
            <li>
               <AdminArticle article = {article}/> 
               <button onClick ={handleDelete}>Delete</button>
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