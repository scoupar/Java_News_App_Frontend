import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import AdminJournalistList from '../components/admin/AdminJournalistList';
import AdminJournalistForm from '../components/admin/AdminJournalistForm';
import JournalistDetail from '../components/journalists/JournalistDetail'   

const JournalistContainer = () => {

    const [journalists, setJournalists] = useState([])


    const requestJournalists = function () {
        const request = new Request();
        const journalistPromise = request.get("/admin/journalists")

        Promise.all([journalistPromise])
        .then((data) => {
            setJournalists(data[0]);
        })
    }

    useEffect(() => {
        requestJournalists()
    }, [])

    const findJournalistById = function(id){
        return journalists.find((journalist) => {
            return journalist.id === parseInt(id);
        })
    }

    const handleDelete = function(id){
        const request = new Request();
        const url = "/admin/journalists/" + id
        request.delete(url)
        .then(() => window.location = "/admin/journalists")
    
    }
    const handlePost = function(journalist){
        const request = new Request();
        request.post("/admin/journalists", journalist)
        .then(() => {window.location = "/admin/journalists"})
        
    }

    const handleUpdate = function(journalist){
        const request = new Request();
        request.patch("/admin/journalists/" + journalist.id, journalist)
        .then(() => window.location = "/admin/journalists" + journalist.id)
    }


    if(!journalists){
        return null
    }
    return (
        <>
        <Switch>

        <Route path = '/admin/journalists/new' render ={() => {
            return <AdminJournalistForm journalists = {journalists} onCreate = {handlePost}/>
        }}/>

        <Route exact path = "/admin/journalists/:id/edit" render = {(props) => {
            const id = props.match.params.id;
            const journalist = findJournalistById(id);
            return <AdminJournalistForm journalist = {journalist} onUpdate = {handleUpdate}/>
        }}/>

        <Route exact path = "/admin/journalists/:id" render ={(props) => {
            const id = props.match.params.id;
            const journalist = findJournalistById(id);
            return <JournalistDetail journalist = {journalist} onDelete = {handleDelete}/>
        }}/>
 
        <Route render={() => {
        return <AdminJournalistList journalists={journalists}/>
        }} />
        </Switch>
        </>
    )
    
    
}


export default JournalistContainer;
