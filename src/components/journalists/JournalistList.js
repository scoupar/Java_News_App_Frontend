import React from 'react';
import Journalist from './Journalist.js';

const JournalistList = ({journalists}) => {

    if(journalists.length === 0){
        return(<p>Loading...</p>)
    }
    const journalistListItem = journalists.map((journalist, index) => {
        return (
            <li key = {index} className = "journalist-item">
                <Journalist journalist = {journalist}/>

            </li>
        )
    })

    return(
        <ul className = "journalist-list">
            {journalistListItem}
        </ul>
    )

        
    
}

export default JournalistList;