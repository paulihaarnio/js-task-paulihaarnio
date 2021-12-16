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
         let temp=weather.current.temp_c
            document.querySelector("span").innerText="The weather of "+weather.location.name+", the temperature is "+temp+" celcius and the wind is "+Math.floor(weather.current.wind_kph*0.28)+" meters per second"
            if(temp<5){
                document.querySelector("span").innerText+="It's a bit cold outside"
            }

	        document.getElementById("image").setAttribute('src', weather.current.condition.icon)
            
	     
	 }
    };
    if(document.getElementById("oulu").selected==true){
    xhttp.open("GET", "http://api.weatherapi.com/v1/current.json?key=bc44c2be4a8948448c882920211512&q=Oulu&aqi=no", true);
    xhttp.send();}
    else if(document.getElementById("oslo").selected==true){
    xhttp.open("GET", "http://api.weatherapi.com/v1/current.json?key=bc44c2be4a8948448c882920211512&q=Oslo&aqi=no", true);
    xhttp.send();}
    else if(document.getElementById("sydney").selected==true){
    xhttp.open("GET", "http://api.weatherapi.com/v1/current.json?key=bc44c2be4a8948448c882920211512&q=Sydney&aqi=no", true);
    xhttp.send();}
    else if(document.getElementById("marbella").selected==true){
     xhttp.open("GET", "http://api.weatherapi.com/v1/current.json?key=bc44c2be4a8948448c882920211512&q=Marbella&aqi=no", true);
     xhttp.send();}
    else if(document.getElementById("london").selected==true){
     xhttp.open("GET", "http://api.weatherapi.com/v1/current.json?key=bc44c2be4a8948448c882920211512&q=London&aqi=no", true);
     xhttp.send();}
    else if(document.getElementById("dubai").selected==true){
     xhttp.open("GET", "http://api.weatherapi.com/v1/current.json?key=bc44c2be4a8948448c882920211512&q=Dubai&aqi=no", true);
     xhttp.send();}
}

function tyhjennä(){
    document.querySelector("span").innerHTML="The weather comes here"
    document.getElementById("joke").innerHTML="The joke comes here"
    document.getElementById("image").setAttribute('src', "")
}

document.querySelector("button").addEventListener("click", getWeather)


document.getElementById("printjoke").addEventListener("click", get_joke_of_the_day)

document.getElementById("tyhjennys").addEventListener("click", tyhjennä )

