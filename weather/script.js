

const apiKey ="c5ca2c4678054084d728a4c01e37cde9";
// const cityName = 'Bangalore'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");  
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`)
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "Km/hr"; 

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "images/clouds.png";
     }
     else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "images/mist.png";
     }
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "images/rain.png";
     }
     else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
     }
     else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "images/mist.png";
          }
}




searchBtn.addEventListener ("click",()=>{
    checkWeather(searchBox.value);
})

