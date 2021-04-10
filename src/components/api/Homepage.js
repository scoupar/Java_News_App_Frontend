import React from 'react';
import HomepageArticle from './HomepageArticle';

const Homepage = ({articles}) => {

    const homepageArticleList = articles.map((article, index) => {   
        return (
            <div className="homepage-list-item" key={index}>
            <li>
               <HomepageArticle article = {article}/> 
            </li>
            </div>
        ) 
    })

    return (

        <div className="homepage">
        <h1>CC News</h1>
        <h3>Top Story</h3>
        <ul>
            {homepageArticleList}
        </ul>
        <a href="#" className="fa fa-facebook bouncy"></a>
        <a href="#" className="fa fa-twitter bouncy2"></a>
        <a href="#" className="fa fa-linkedin bouncy3"></a>
        </div>
    )
}

export default Homepage;