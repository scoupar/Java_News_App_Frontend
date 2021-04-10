import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import JournalistContainer from '../JournalistContainer';

const AdminContainer = () => {
    return (
       
            <>
            <div className = "admin-menu">
            <Link to="/admin/journalists">Add or Edit Journalists</Link>
            </div>
            </>

     
        

        
        
    )
}

export default AdminContainer;