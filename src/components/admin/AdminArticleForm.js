import React, {useState, useEffect} from 'react';

const AdminArticleForm = ({article, journalists, onCreate, onUpdate }) => {
    
const [stateArticle, setStateArticle] = useState(
    {
     articleTitle:"",
     body:"",
     intro:"",
     date:null,
     journalist:null,
     category:null,
     image:""
    }
)

const handleChange = function(event){
    let propertyName = event.target.name;
    let copiedArticle = {...stateArticle}
    copiedArticle[propertyName] = event.target.value;
    setStateArticle(copiedArticle)
}

const handleJournalist = function(event){
    const index = parseInt(event.target.value);
    const selectedJournalist = journalists[index]
    let copiedArticle = {...stateArticle};
    copiedArticle['journalist'] = selectedJournalist
    setStateArticle(copiedArticle)
}

const handleSubmit = function(event){
    event.preventDefault();
    if(stateArticle.id){
        onUpdate(stateArticle)
    } else{
        onCreate(stateArticle);
    }
}

const findJournalistIndex = function(){
    if(article){
        return journalists.findIndex(journalist => article.journalist.id === journalist.id)
    }else {
        return null;
    }
}

useEffect(() => {
    if(article){
        let copiedArticle ={...article}
        setStateArticle(copiedArticle)
    }
}, [article])

const journalistOptions = journalists.map((journalist, index) => {
    return <option key={index} value={index}>{journalist.name}</option>
})

let heading = "";

if(!article){
    heading = "Create Article"
}else {
    heading = "Edit " + article.articleTitle; 
}

if (!journalists.length === 0){
    return <p>Loading...</p>
}
    
    return (
        <>
        <h3>{heading}</h3>
        <form id ="articleForm" onSubmit = {handleSubmit}>
        <input type = "text" placeholder = "article title" name="articleTitle" onChange = {handleChange} value ={stateArticle.articleTitle}/>
        <textarea rows = "20" cols = "40" placeholder = "article body" name="body" onChange = {handleChange} value ={stateArticle.body}/>
        <input type = "text" placeholder = "intro" name="intro" onChange = {handleChange} value ={stateArticle.intro}/>
        <input type = "date"  name="date" onChange = {handleChange} value ={stateArticle.date}/>
        <select name ="journalist" onChange ={handleJournalist}  default value={findJournalistIndex || 'select-journalist'} value ={stateArticle.journalist}>
            <option disabled value='select journalist'>Assign a journalist</option>
            {journalistOptions}
        </select>
        <select name = "category" onChange = {handleChange} value={stateArticle.category}>
            <option disabled value = "select a category">Select a category</option>
            <option>News</option>
            <option>Sports</option>
            <option>Entertainment</option>
            <option>Politics</option>
        </select>
        <input type = "text" placeholder = "image url" name ="image" onChange = {handleChange} value ={stateArticle.image}/>
        <button type ="submit">Save</button>
        </form>
        
        </>
        
    )
}

export default AdminArticleForm;