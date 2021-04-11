import React from 'react';
import {Link} from 'react-router-dom';

const Article = ({article}) => {

    if(!article){
        return <p>Loading...</p>
    }

    const url = '/articles/' + article.id; 

    return (
        <div className = 'article-item'>
      
            <Link to={url}>
            
            <p>{article.articleTitle}</p>
            </Link>
     
            
            <p>{article.date}</p>
            <p><p>By</p>{article.journalist.name}</p>
            <Link to={url}>
            <p>{article.intro}</p>
            </Link>
            <p>{article.category}</p>
            <img src = {article.image} alt="description" height="120"/>
        
         

        </div>

    )
}

export default Article;