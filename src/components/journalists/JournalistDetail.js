import React from 'react';
import Journalist from './Journalist';
import {link} from 'react-router-dom';

const JournalistDetail = ({journalist, onDelete}) => {

    if(!journalist){
        return <p>Loading...</p>
    }

    const handleDelete = () => {
        onDelete(journalist.id)
    }

    return (
        <div className = "journalist-detail">
            <Journalist journalist = {journalist}/>
            <button onClick = {handleDelete}>Delete {journalist.name}</button>
        </div>


        
    )
}

export default JournalistDetail;