import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import ArticleContainer from './ArticleContainer';
import JournalistContainer from './JournalistContainer';
import Homepage from '../components/Homepage';
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
               <Route path ="/admin/articles" component = {ArticleContainer}/>
               <Route path="/articles/sports" component={ArticleContainer} />
               <Route path="/articles/news" component={ArticleContainer} />
               <Route path="/articles/entertainment" component={ArticleContainer} />
               <Route path="/articles/politics" component={ArticleContainer} />
               <Route path="/articles" component={ArticleContainer} />
               <Route path="/articles/category" component={ArticleContainer} />
               <Route path ="/admin" component={AdminContainer}/>

                                  


               <Route path="/topstories" component={ApiContainer} />
               <Route path="/" component={Homepage} />
           </Switch>
           </>
       </Router>
    )
}

export default MainContainer;