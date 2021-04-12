import React from 'react';
import Journalist from '../../components/journalists/Journalist';
import {Link} from 'react-router-dom';

const AdminJournalistList = ({journalists}) => {

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
        <>
        <div className="admin-links">
        <Link className = "journalist-link"to ="/admin"><p>Back to Admin Menu</p></Link>
        <Link className = "journalist-link"to ="/admin/journalists/new"><p>Add New Journalist</p></Link>
        </div>
        <ul className = "journalist-list">
            {journalistListItem}
        </ul>
        </>
    )

        
    
}

export default AdminJournalistList;