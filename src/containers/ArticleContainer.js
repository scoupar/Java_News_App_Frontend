import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import ArticleList from '../components/articles/ArticleList';

const ArticleContainer = () => {
    
    const [articles, setArticles] = useState([]);
    
    const requestArticles = function(){
        const request = new Request();
        const articlePromise = request.get('/articles');
        Promise.all([articlePromise])
        .then((data) => {setArticles(data[0]);
        })
    }

    useEffect(() => {
        requestArticles()
    },[])
    
    if(!articles){
        return null
    }
    
    return (
        <>
        <Switch>

        <Route render = {
            () => {
                return <ArticleList articles = {articles}/>
            }
        }/>

        </Switch>

        </>
        
    )
}

export default ArticleContainer;