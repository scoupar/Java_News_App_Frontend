import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import ArticleList from '../components/articles/ArticleList';
import ArticleDetail from '../components/articles/ArticleDetail';

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


    const findArticleByCategory = function(category) {
        return articles.find((article) => {
            return article.category;
        })
    }
    

    const findArticleById = function(id){
        return articles.find((article) => {
            return article.id === parseInt(id);
        })

    

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
        <Route exact path ="/articles/category" render={(props) => {
            const category = props.match.params.category;
            const article = findArticleByCategory(category);
            return <ArticleDetail article={article.category} />
        }} />

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