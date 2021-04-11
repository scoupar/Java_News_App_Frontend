import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import ArticleList from '../components/articles/ArticleList';
import ArticleDetail from '../components/articles/ArticleDetail';
import Journalist from '../components/journalists/Journalist';

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
    

    const findArticleById = function(id){
        return articles.find((article) => {
            return article.id === parseInt(id);
        })
    }

    const handleDelete = function(id){
        const request = new Request();
        const url = "/articles/" + id
        request.delete(url)
        .then(() => {window.location = "/admin/articles"})
    }

    const handlePost = function(article){
        const request = new Request();
        request.post("/articles", article)
        .then(() => {window.location = "/admin/articles"})
    }

    const handleUpdate = function(article){
        const request = new Request();
        request.patch("/articles/" + article.id, article)
        .then(() => window.location = "/admin/articles/" + article.id)
    }

    if(!articles){
        return null
    }
    
    return (
        <>
        <Switch>

        <Route exact path="/articles/:id" render={(props) => {
            const id = props.match.params.id;
            const article = findArticleById(id);
            return <ArticleDetail article={article} />
                
        }}/>

        <Route exact path ="/admin/articles" render = {() =>{
            return <ArticleList articles = {articles}/>
        }}/>

        

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