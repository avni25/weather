
const API_KEY="9beac29090e644d39a774e8246fd5794";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=${API_KEY}`;



function getData(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${API_KEY}`)
        .then(res => res.json())        
        .then(data => {
                console.log(data);
                document.getElementById("temp").innerHTML = data.main.temp;
        });
}

getData("London");


