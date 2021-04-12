import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from '../components/api/Homepage';

const HomepageContainer = () => {

    const [topArticle, setTopArticle] = useState([]);


    const getTopArticle = () => {
        fetch("https://newsapi.org/v2/top-headlines?country=gb&pageSize=2&apiKey=409459398012455496735fd6efed8331")
        .then((res) => res.json())
        .then((data) => setTopArticle(data.articles))
    }

    useEffect(() => {
        getTopArticle();
    }, [])

    return (
        <>
        <Switch>

        <Route exact path="/" render = {() => {
                return <Homepage articles = {topArticle}/>
            }
        }/>
        </Switch>       
        </>
    )
}

export default HomepageContainer;