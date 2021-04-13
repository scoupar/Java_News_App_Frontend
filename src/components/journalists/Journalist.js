import React from 'react';
import {Link} from 'react-router-dom';


const Journalist = ({journalist}) => {
    
    if(!journalist){
        return<p>Loading...</p>
    }

    const url = "/admin/journalists/" + journalist.id;
    
    return (
        <>
        <Link to = {url} className = "journalist-name">
        <img className = "journalist-image" src = {journalist.image} alt = "description" height ="100"/>
        <p>{journalist.name}</p>
        </Link>
        <p className ="journalist-item">Title: {journalist.title}</p>
        </>
    )
}

export default Journalist;