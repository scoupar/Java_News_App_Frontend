import React, {useState, useEffect} from 'react';

const AdminJournalistForm = ({journalist, onCreate, onUpdate}) => {

    const [stateJournalist, setStateJournalist] = useState(
        {
            name:"",
            title:""
        }
    )

    useEffect(() => {
        if(journalist){
            let copiedJournalist ={...journalist}
            setStateJournalist(copiedJournalist);
        }else{
            let resetJournalist ={
                name:"",
                title:""
            }
            setStateJournalist(resetJournalist);
        }
    }, [journalist])


    const handleChange = function(event){
        let propertyName = event.target.name;
        let copiedJournalist ={...stateJournalist}
        copiedJournalist[propertyName] = event.target.value;
        setStateJournalist(copiedJournalist);
    }

    const handleSubmit = function(event){
        event.preventDefault();
        if(stateJournalist.id){
            onUpdate(stateJournalist)
        }else{
            onCreate(stateJournalist)
        }
    }


    return (
        <form onSubmit ={handleSubmit}>
            <input type ="text" placeholder ="Name" name ="name" onChange = {handleChange} value = {stateJournalist.name}/>
            <input type ="text" placeholder ="Title" name = "title" onChange = {handleChange} value = {stateJournalist.title}/>
            <button type = "submit">Save</button>

        </form>
    )
}

export default AdminJournalistForm;