import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import AdminJournalistList from '../components/admin/AdminJournalistList';
import AdminJournalistForm from '../components/admin/AdminJournalistForm';
import JournalistDetail from '../components/journalists/JournalistDetail'   
import ArticleList from '../components/articles/ArticleList';

const JournalistContainer = () => {

    const [journalists, setJournalists] = useState([])
    const [journalistHelen, setJournalistHelen] = useState([])
    const [journalistScott, setJournalistScott] = useState([])
    const [journalistTina, setJournalistTina] = useState([])
    const [journalistGregor, setJournalistGregor] = useState([])

    const requestJournalists = function () {
        const request = new Request();
        const journalistPromise = request.get("/admin/journalists")
        const journalistHelenPromise = request.get("/articles/journalist/name?name=Helen Aguda")
        const journalistScottPromise = request.get("/articles/journalist/name?name=Scott Coupar")
        const journalistTinaPromise = request.get("/articles/journalist/name?name=Tina Houston")
        const journalistGregorPromise = request.get("/articles/journalist/name?name=Gregor Simpson")

        Promise.all([journalistPromise, journalistHelenPromise, journalistScottPromise, journalistTinaPromise, journalistGregorPromise])
        .then((data) => {
            setJournalists(data[0]);
            setJournalistHelen(data[1]);
            setJournalistScott(data[2]);
            setJournalistTina(data[3]);
            setJournalistGregor(data[4]);
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
        .then(() => {window.location = "/admin/journalists"})
    
    }
    const handlePost = function(journalist){
        const request = new Request();
        request.post("/admin/journalists", journalist)
        .then(() => {window.location = "/admin/journalists"})
        
    }

    const handleUpdate = function(journalist){
        const request = new Request();
        request.patch("/admin/journalists/" + journalist.id, journalist)
        .then(() => window.location = "/admin/journalists/" + journalist.id)
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

        

        <Route exact path="/articles/journalist/name/Helen Aguda"      render={(props) => {
                    return <ArticleList articles={journalistHelen}/>
        }} />
        <Route exact path="/articles/journalist/name/Scott Coupar" render={(props) => {
                    return <ArticleList articles={journalistScott}/>

        }} />

        <Route exact path="/articles/journalist/name/Tina Houston" render={(props) => {
                    return <ArticleList articles={journalistTina}/>

        }} />

        <Route exact path="/articles/journalist/name/Gregor Simpson" render={(props) => {
                    return <ArticleList articles={journalistGregor}/>

        }} />
 
        <Route render={() => {
        return <AdminJournalistList journalists={journalists}/>
        }} />

        
        </Switch>
        </>
    )
    
    
}


export default JournalistContainer;
