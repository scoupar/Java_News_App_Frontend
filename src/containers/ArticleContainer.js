import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import ArticleList from '../components/articles/ArticleList';
import ArticleDetail from '../components/articles/ArticleDetail';
import Journalist from '../components/journalists/Journalist';
import AdminArticleList from '../components/admin/AdminArticleList';
import AdminArticleForm from '../components/admin/AdminArticleForm';

const ArticleContainer = () => {
    
    const [articles, setArticles] = useState([]);
    const [sportsArticles, setSportsArticles] = useState([]);
    const [newsArticles, setNewsArticles] = useState([]);
    const [entertainmentArticles, setEntertainmentArticles] = useState([]);
    const [politicsArticles, setPoliticsArticles] = useState([]);
    const [articlesJournalist, setArticlesJournalist] = useState([]);

    
    const requestArticles = function(){
        const request = new Request();
        const articlePromise = request.get('/articles');
        const sportsArticlePromise = request.get('/articles/category?category=Sports')
        const newsArticlePromise = request.get('/articles/category?category=News')
        const entertainmentArticlePromise = request.get('/articles/category?category=Entertainment')
        const politicsArticlePromise = request.get('/articles/category?category=Politics')
        const articlesJournalistPromise = request.get('/admin/journalists')


        Promise.all([articlePromise, sportsArticlePromise, newsArticlePromise, entertainmentArticlePromise, politicsArticlePromise, articlesJournalistPromise])
        .then((data) => {
            setArticles(data[0]);
            setSportsArticles(data[1]);
            setNewsArticles(data[2]);
            setEntertainmentArticles(data[3]);
            setPoliticsArticles(data[4]);
            setArticlesJournalist(data[5]);
        })
    }

    useEffect(() => {
        requestArticles()
    },[])


    // const findArticleByCategory = function(category) {
    //     return articles.find((article) => {
    //         return article.category;
    //     })
    // }
    

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

    // const findArticleByCategory = function(category){
    //     return articles.find((articles) => {
    //         return articles.category
    //     })
    // }
    if(!articles){
        return null
    }
    
    return (
        <>
        <Switch>

        <Route exact path="/articles" render = {
            () => {
                return <ArticleList articles = {articles}/>
            }
        }/>

        <Route exact path="/articles/sports" render={(props) => {
            return <ArticleList articles={sportsArticles} />                
        }}/>

        <Route exact path="/articles/news" render={(props) => {
            return <ArticleList articles={newsArticles} />                
        }}/>
        
        <Route exact path="/articles/entertainment" render={(props) => {
            return <ArticleList articles={entertainmentArticles} />                
        }}/>

        <Route exact path="/articles/politics" render={(props) => {
            return <ArticleList articles={politicsArticles} />                
        }}/> 

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

        <Route exact path ="/admin/articles" render = {() =>{
            return <AdminArticleList articles = {articles} onDelete = {handleDelete}/>
        }}/>

        <Route exact path="/admin/articles/:id" render={(props) => {
            const id = props.match.params.id;
            const article = findArticleById(id);
            return <AdminArticleForm article={article} journalists = {articlesJournalist} onUpdate ={handleUpdate} onCreate = {handlePost}/>
                
        }}/>

        


        <Route exact path="/articles/sports" render = {
            () => {
                return <ArticleList articles = {sportsArticles}/>
            }
        }/>

        <Route exact path="/articles/news" render = {
            () => {
                return <ArticleList articles = {newsArticles}/>
            }
        }/>

        <Route exact path="/articles/entertainment" render = {
            () => {
                return <ArticleList articles = {entertainmentArticles}/>
            }
        }/>

        <Route exact path="/articles/politics" render = {
            () => {
                return <ArticleList articles = {politicsArticles}/>
            }
        }/>

        
        
        </Switch>
        
        </>
        
    )
}

export default ArticleContainer;