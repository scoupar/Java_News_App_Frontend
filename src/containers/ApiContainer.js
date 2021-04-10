import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import TopArticleList from '../components/api/TopArticleList';
import TopArticleDetail from '../components/api/TopArticleDetail';

const ApiContainer = () => {

    const [topArticles, setTopArticles] = useState([]);
    const [selectedTopArticle, setSelectedTopArticle] = useState([]);

    const getTopArticles = () => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=409459398012455496735fd6efed8331")
        .then((res) => res.json())
        .then((data) => setTopArticles(data.articles))
    }

    useEffect(() => {
        getTopArticles();
    }, [])

    const handleSelectedTopArticle = (article) => {
        setSelectedTopArticle(article)
    }

    return (
        <>
        <Switch>
        <Route exact path="/topstories" render = {() => {
                return <TopArticleList articles = {topArticles}/>
            }
        }/>       
        </Switch>       
        </>
    )
}

export default ApiContainer;