import React, {useState, useEffect} from 'react';
import HomepageArticle from './HomepageArticle';

const Homepage = ({articles, weather}) => {

    const homepageArticleList = articles.map((article, index) => {   
        return (
            <div className="homepage-list-item" key={index}>
            <li>
               <HomepageArticle article = {article}/> 
            </li>
            </div>
        ) 
    })

    const [feels_like, setFeelsLike] = useState('');
    const [mainTemp, setMainTemp] = useState('');
    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        fetch ("http://api.openweathermap.org/data/2.5/weather?q=glasgow&units=metric&appid=c70067f80966f116fde30f60fdf084ad")
        .then((res) => res.json())
        .then((data) =>{
            setFeelsLike(data.main.feels_like);
            setMainTemp(data.main.temp);
            setName(data.name);
            setIcon(data.weather.icon);
        })
    }, [])


    return (
        <div>
            <img id="logo" src="http://localhost:3000/images/logoblack.png" alt="logo" height="100" />
            <ul>
                {homepageArticleList}
            </ul>
            <a href="#" className="fa fa-facebook bouncy"></a>
            <a href="#" className="fa fa-twitter bouncy2"></a>
            <a href="https://linktr.ee/tinahouston1994" className="fa fa-linkedin bouncy3"></a>
            <a href="https://github.com/TinaHouston/Java_News_App_Frontend" className="fa fa-github bouncy4"></a>
            <p>{feels_like} and {mainTemp}</p>
            <div id="weather_wrapper">
	        <div className="weatherCard">
		        <div className="currentTemp">
			    <span className="temp">{mainTemp}&deg;</span>
			    <span className="location">{name}</span>
		        </div>
		    <div className="currentWeather">
			    <span className="conditions">{icon}</span>
			    <div className="info">
				<span className="rain">1.3 MM</span>
				<span className="wind">10 MPH</span>
			    </div>
		    </div>
	    </div>
        </div>
        </div>
    )
}

export default Homepage;