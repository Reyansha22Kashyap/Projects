let searchBtn = document.getElementById("searchBtn");
let cityInput = document.getElementById("cityInput"); 
let weatherResult = document.getElementById("weatherResult"); 

searchBtn.addEventListener("click",async function(){
    let city = cityInput.value;
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city +  "&appid=82b2bca730ca8d8302bd8e60200f33a8&units=metric"; 
    try{
    let response = await fetch(url);
    let data = await response.json();

    let temp = data.main.temp;
    let humidity = data.main.humidity;
    let condition = data.weather[0].description;
    let cityName = data.name;

    weatherResult.textContent = cityName + ": " + temp + "°C, " + humidity + "% humidity, " + condition ;
    } catch (error){
        weatherResult.textContent = "City not found. Please try again.";
    }
});
