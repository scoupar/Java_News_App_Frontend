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
            <button onClick = {handleDelete}>Delete {journalist.name}</button>
            <Link to = {editUrl}><button type="button">Edit {journalist.name}</button></Link>
        </div>


        
    )
}

export default JournalistDetail;