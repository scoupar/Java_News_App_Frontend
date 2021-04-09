import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import ArticleContainer from './ArticleContainer';
import JournalistContainer from './JournalistContainer';
import Homepage from '../components/Homepage';



const MainContainer = () => {
    return (
       <Router>
           <>
           <NavBar className="navBar"/>
           <Switch>
               <Route path="/journalists" component={JournalistContainer} />
               <Route path="/articles" component={ArticleContainer} />
               <Route path="/" component={Homepage} />



           </Switch>




           </>
       </Router>
    )
}

export default MainContainer;