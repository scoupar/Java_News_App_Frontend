import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import JournalistList from '../components/journalists/JournalistList';
   

const JournalistContainer = () => {

    const [journalists, setJournalists] = useState([])


    const requestJournalists = function () {
        const request = new Request();
        const journalistPromise = request.get("/journalists")

        Promise.all([journalistPromise])
        .then((data) => {
            setJournalists(data);
        })
    }

    useEffect(() => {
        requestJournalists()
    }, [])

    return (
        <>
        <Switch>

        <Route render={() => {
        return <JournalistList journalists={journalists}/>
      }} />


        </Switch>


        </>
    )
}

export default JournalistContainer;