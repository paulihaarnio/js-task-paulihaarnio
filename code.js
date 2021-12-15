function get_joke_of_the_day() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
         let joke=JSON.parse(this.response)
	  
	     document.getElementById("joke").innerHTML=joke.contents.jokes[0].joke.text+"<br>"
         document.getElementById("joke").innerHTML+="credits to "+joke.contents.copyright+"&copy;"
	 }
    };
    if(document.getElementById("blonde").selected==true){
    xhttp.open("GET", "https://api.jokes.one/jod?category=blonde", true);
    xhttp.send();}
    else if(document.getElementById("animal").selected==true){
    xhttp.open("GET", "https://api.jokes.one/jod?category=animal", true);
    xhttp.send();}
    else{
    xhttp.open("GET", "https://api.jokes.one/jod?category=jod", true);
    xhttp.send();}
}

function getWeather() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
         let weather=JSON.parse(this.response)
            document.querySelector("span").innerHTML="The weather of "+weather.location.name+", the tempature is "+weather.current.temp_c+" celcius and the wind is "+Math.floor(weather.current.wind_kph*0.28)+" meters per second"
	        
	     
	 }
    };
    xhttp.open("GET", "http://api.weatherapi.com/v1/current.json?key=bc44c2be4a8948448c882920211512&q=Oulu&aqi=no", true);
    xhttp.send();
}

function tyhjennä(){
    document.querySelector("span").innerHTML=""
    document.getElementById("joke").innerHTML="vitsi tulee tähän"
}

document.getElementById("print_weather").addEventListener("click", getWeather)


document.querySelector("button").addEventListener("click", get_joke_of_the_day)

document.getElementById("tyhjennys").addEventListener("click", tyhjennä )

