import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import ArticleContainer from './ArticleContainer';
import JournalistContainer from './JournalistContainer';
import HomepageContainer from './HomepageContainer';
import AdminContainer from './admin/AdminContainer';
import ApiContainer from './ApiContainer';


const MainContainer = () => {

    return (
       <Router>
           <>
           <NavBar className="navBar"/>
           <Switch>
               <Route path="/admin/journalists" component={JournalistContainer} />
               <Route path="/articles/sports" component={ArticleContainer} />
               <Route path="/articles" component={ArticleContainer} />
               <Route path ="/admin" component={AdminContainer}/>
               <Route path="/topstories" component={ApiContainer} />
               <Route path="/" component={HomepageContainer} />
           </Switch>
           </>
       </Router>
    )
}

export default MainContainer;