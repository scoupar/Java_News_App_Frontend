import React from 'react';
import {Link} from 'react-router-dom';

const AdminArticle = ({article}) => {

    if(!article){
        return <p>Loading...</p>
    }

    const url = '/admin/articles/' + article.id;

    return(
        <div className = 'admin-article-item'>
            <Link className = "admin-link" to ={url}>
                <p>{article.articleTitle} (Click to Edit)</p>
            </Link>
            <p>{article.journalist.name}</p>
            <p>{article.date}</p>

        </div>
    )

}

export default AdminArticle;