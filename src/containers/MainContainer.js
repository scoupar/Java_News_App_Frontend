import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import ArticleContainer from './ArticleContainer';
import JournalistContainer from './JournalistContainer';
import HomepageContainer from './HomepageContainer';
import AdminContainer from './admin/AdminContainer';
import ArticleList from '../components/articles/ArticleList';
import ApiContainer from './ApiContainer';


const MainContainer = () => {

    return (
       <Router>
           <>
           <NavBar className="navBar"/>
           <Switch>
               <Route path="/admin/journalists" component={JournalistContainer} />
               <Route path="/articles/journalist/name/Helen Aguda" component={JournalistContainer} />
               <Route path="/articles/journalist/name/Scott Coupar" component={JournalistContainer} />
               <Route path="/articles/journalist/name/Tina Houston" component={JournalistContainer} />
               <Route path="/articles/journalist/name/Gregor Simpson" component={JournalistContainer} />
               <Route path ="/admin/articles" component = {ArticleContainer}/>
               <Route path="/articles/sports" component={ArticleContainer} />
               <Route path="/articles/news" component={ArticleContainer} />
               <Route path="/articles/entertainment" component={ArticleContainer} />
               <Route path="/articles/politics" component={ArticleContainer} />
               <Route path="/articles" component={ArticleContainer} />
               <Route path="/articles/category" component={ArticleContainer} />
               <Route path="/articles/journalist/name/Helen" component={ArticleContainer} />
               <Route path ="/admin" component={AdminContainer}/>
               <Route path ="/articles/search" component={ArticleContainer}/>

                                  


               <Route path="/topstories" component={ApiContainer} />
               <Route path="/" component={HomepageContainer} />
           </Switch>
           </>
       </Router>
    )
}

export default MainContainer;