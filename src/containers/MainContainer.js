import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import ArticleContainer from './ArticleContainer';
import JournalistContainer from './JournalistContainer';



const MainContainer = () => {
    return (
       <Router>
           <>
           <Switch>
               <Route path="/journalists" component={JournalistContainer} />
               <Route path="/articles" component={ArticleContainer} />



           </Switch>




           </>
       </Router>
    )
}

export default MainContainer;