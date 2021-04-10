import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import ArticleList from '../components/articles/ArticleList';
import ArticleDetail from '../components/articles/ArticleDetail';

const ArticleContainer = () => {
    
    const [articles, setArticles] = useState([]);
    const [sportsArticles, setSportsArticles] = useState([]);
    
    const requestArticles = function(){
        const request = new Request();
        const articlePromise = request.get('/articles');
        const sportsArticlePromise = request.get('/articles/category?category=Sports')


        Promise.all([articlePromise, sportsArticlePromise])
        .then((data) => {
            setArticles(data[0]);
            setSportsArticles(data[1]);
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

    const findArticleByCategory = function(category){
        return articles.find((articles) => {
            return articles.category
        })
    }
    if(!articles){
        return null
    }
    
    return (
        <>
        <Switch>

<<<<<<< HEAD
        <Route exact path ="/articles/category" render={(props) => {
            const category = props.match.params.category;
            const articleCategory = findArticleByCategory(category);
            return <ArticleDetail article={articleCategory} />
        }} />
=======
        <Route exact path="/articles" render = {
            () => {
                return <ArticleList articles = {articles}/>

            }
        }/>

        <Route exact path="/articles/sports" render={(props) => {
            const category = props.match.params.category;
            const articles = findArticleByCategory(category);
            return <ArticleList articles={sportsArticles} />
                
        }}/>
>>>>>>> develop

        <Route exact path="/articles/:id" render={(props) => {
            const id = props.match.params.id;
            const article = findArticleById(id);
            return <ArticleDetail article={article} />
                
        }}/>
        {/* <Route path ="/articles/:category" render={(props) => {
            const category = props.match.params.category;
            const article = findArticleByCategory(category);
            return <ArticleDetail article={article} />
        }} /> */}

        <Route exact path="/articles/sports" render = {
            () => {
                return <ArticleList articles = {sportsArticles}/>

            }
        }/>
        
        </Switch>
        
        </>
        
    )
}

export default ArticleContainer;