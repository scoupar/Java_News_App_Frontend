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
    const [wind, setWind] = useState('');
    const [temp_max, setTempMax] = useState('');

    useEffect(() => {
        fetch ("http://api.openweathermap.org/data/2.5/weather?q=glasgow&units=metric&appid=c70067f80966f116fde30f60fdf084ad")
        .then((res) => res.json())
        .then((data) =>{
            setFeelsLike(data.main.feels_like);
            setMainTemp(data.main.temp);
            setName(data.name);
            setIcon(data['weather'][0]['icon']);
            setWind(data.wind.speed);
            setTempMax(data.main.temp_max);
        })
    }, [])

    // const icon = data.weather[0].icon;
    // let locationIcon = document.querySelector('.weather-icon');
    // locationIcon.innerHTML = `<img src="icons/${icon}.png">;`;

    


    return (
        <div>
            <img id="main-logo" src="http://localhost:3000/images/logoblack.png" alt="logo" height="120" />
            <div id="weather_wrapper">
	        <div className="weatherCard">
		        <div className="currentTemp">
			    <span className="temp">{mainTemp}&deg;</span>
			    <span className="location">{name}</span>
		        </div>
		    <div className="currentWeather">
			    <span className="conditions"><img alt="weather icon" height="120"src={`http://localhost:3000/images/icons/${icon}.png`} /></span>
			    <div className="info">
				<span className="rain">{temp_max}&deg; MAX</span>
				<span className="wind">{wind} MPH</span>
			    </div>
		    </div>
	    </div>
        </div>
        <h1 className="top-stories-title">Top Stories</h1>
        <hr></hr>
        <br></br>
            <ul>
                {homepageArticleList}
            </ul>
            <a href="#" className="fa fa-facebook bouncy"></a>
            <a href="#" className="fa fa-twitter bouncy2"></a>
            <a href="https://linktr.ee/tinahouston1994" className="fa fa-linkedin bouncy3"></a>
            <a href="https://github.com/TinaHouston/Java_News_App_Frontend" className="fa fa-github bouncy4"></a>
        </div>
    )
}

export default Homepage;