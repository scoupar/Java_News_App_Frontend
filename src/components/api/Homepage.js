import React, {useState, useEffect} from 'react';
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

        <div>
        <img id="logo" src="http://localhost:3000/images/logoblack.png" alt="logo" height="100" />
        <ul>
            {homepageArticleList}
        </ul>
        <a href="#" className="fa fa-facebook bouncy"></a>
        <a href="#" className="fa fa-twitter bouncy2"></a>
        <a href="https://linktr.ee/tinahouston1994" className="fa fa-linkedin bouncy3"></a>
        <a href="https://github.com/TinaHouston/Java_News_App_Frontend" className="fa fa-github bouncy4"></a>
        
        </div>
    )
}

export default Homepage;