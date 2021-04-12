import React from 'react';
import Journalist from './Journalist';
import {Link} from 'react-router-dom';

const JournalistDetail = ({journalist, onDelete}) => {

    if(!journalist){
        return <p>Loading...</p>
    }

    const handleDelete = () => {
        onDelete(journalist.id)
    }

    const editUrl = "/admin/journalists/" + journalist.id + "/edit"

    return (
        <div className = "journalist-detail">
            <Journalist journalist = {journalist}/>
            <button  className = "admin-button"onClick = {handleDelete}>Delete {journalist.name}</button>
            <Link to = {editUrl}><button type="button" className = "admin-button">Edit {journalist.name}</button></Link>
            <Link className = "admin-link"to = "/admin/journalists"><p>Return to all journalists</p></Link>
        </div>


        
    )
}

export default JournalistDetail;