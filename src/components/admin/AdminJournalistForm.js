import React, {useState, useEffect} from 'react';

const AdminJournalistForm = ({journalist, onCreate, onUpdate}) => {

    const [stateJournalist, setStateJournalist] = useState(
        {
            name:"",
            title:""
        }
    )


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


    let heading = "";

    if(!journalist){
        heading = "Create New Journalist"
    } else{
        heading = "Edit " + journalist.name;
    }



    return (
        <>
        <h2 className ="form-heading">{heading}</h2>
        <form className = "journalist-form"onSubmit ={handleSubmit}>
        <label for ="name">Name: </label>
        <input type ="text" placeholder ="Name" name ="name" onChange = {handleChange} value = {stateJournalist.name}/>
        <label for ="title">Title: </label>
        <input type ="text" placeholder ="Title" name = "title" onChange = {handleChange} value = {stateJournalist.title}/>
        <label for = "image">Image Url:</label>
        <input type = "text" placeholder = " Image URL" name ="image" onChange = {handleChange} value = {stateJournalist.image}/>
        <button type = "submit">Save</button>
        </form>
        </>
    )
}

export default AdminJournalistForm;