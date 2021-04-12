import React from 'react';
import AdminArticle from './AdminArticle';
import {Link} from 'react-router-dom';

const AdminArticleList = ({articles, onDelete, article}) => {


const handleDelete = (event) => {
    onDelete(event.target.value)
    
}

    const adminArticleListItems = articles.map((article, index) => {   
        return (
            <>

            <div className="admin-article-list">
            <ul>
            <li>
               <AdminArticle article = {article}/> 
               <button className = "admin-button"value = {article.id} onClick ={handleDelete}>Delete</button>
            </li>
            </ul>
            </div>
            </>
        ) 
    })



    return (
        <>
        <div className="admin-links">
        <Link className = "admin-link"to ="/admin"><p>Back to Admin Menu</p></Link>
        <Link className = "admin-link"to ="/admin/articles/new"><p>Add New Article</p></Link>
        </div>
        <div className="admin-article-list">
            <ul>
                {adminArticleListItems}
            </ul>

        </div>
        </>
        
    )
}

export default AdminArticleList;