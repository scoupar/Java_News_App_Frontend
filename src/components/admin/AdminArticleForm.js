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
        <h2>{heading}</h2>
        <form className ="article-form" onSubmit = {handleSubmit}>
        <label for = "articleTitle">Article Headline:</label>
        <input type = "text" placeholder = "Article Headline" name="articleTitle" onChange = {handleChange} value ={stateArticle.articleTitle}/>
        <label for = "body">Body:</label>
        <textarea rows = "20" cols = "40" placeholder = "Article Body" name="body" onChange = {handleChange} value ={stateArticle.body}/>
        <label for = "intro">Article Intro:</label>
        <input type = "text" placeholder = "Article Intro" name="intro" onChange = {handleChange} value ={stateArticle.intro}/>
        <label for = "date">Publish Date:</label>
        <input type = "date"  name="date" onChange = {handleChange} value ={stateArticle.date}/>
        <label for = "journalist">Article Author:</label>
        <select name ="journalist" onChange ={handleJournalist}  default value={findJournalistIndex || 'select-journalist'} value ={stateArticle.journalist}>
            <option disabled value='select journalist'>Assign a Journalist</option>
            {journalistOptions}
        </select>
        <label for = "category">Article Category:</label>
        <select name = "category" onChange = {handleChange} value={stateArticle.category}>
            <option disabled value = "select a category">Select a category</option>
            <option>News</option>
            <option>Sports</option>
            <option>Entertainment</option>
            <option>Politics</option>
        </select>
        <label for = "image">Image URL:</label>
        <input type = "text" placeholder = "image url" name ="image" onChange = {handleChange} value ={stateArticle.image}/>
        <button type ="submit">Save</button>
        </form>
        
        </>
        
    )
}

export default AdminArticleForm;