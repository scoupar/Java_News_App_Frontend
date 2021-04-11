import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import ArticleContainer from './ArticleContainer';
import JournalistContainer from './JournalistContainer';
import AdminContainer from './admin/AdminContainer';
import ArticleList from '../components/articles/ArticleList';



const MainContainer = () => {
    return (
       <Router>
           <>
           <Switch>
               <Route path="/admin/journalists" component={JournalistContainer} />
               <Route path ="/admin/articles" component = {ArticleContainer}/>
               <Route path="/articles" component={ArticleContainer} />
               <Route path ="/admin" component={AdminContainer}/>

                                  


           </Switch>




           </>
       </Router>
    )
}

export default MainContainer;