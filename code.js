function get_joke_of_the_day() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
         let joke=JSON.parse(this.response)
         let jokeText=document.getElementById("joke")
	     jokeText.innerHTML=joke.contents.jokes[0].joke.text+"<br>"
         jokeText.innerHTML+="credits to "+joke.contents.copyright+"&copy;"
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
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
         let weather=JSON.parse(this.response)
         let temp=weather.current.temp_c
         let text=document.querySelector("span")
            text.innerText="The weather of "+weather.location.name+", the temperature is "+temp+" degrees celcius and the wind is "+Math.floor(weather.current.wind_kph*0.28)+" meters per second"
            if(temp<-15){
                text.innerText+=" Watch out for the frostbites!"
            }
            else if(temp<-5){
                text.innerText+=" Best time for skiing!"
            }
            else if(temp<0){
                text.innerText+=" Don't forget your scarf."
            }
            else if(temp<5){
                text.innerText+=" It's a bit cold outside"
            }
            else if(temp<10){
                text.innerText+=" You should put a jacket on"
            }
            else if(temp<15){
                text.innerText+=" Perfect hoodie weather"
            }
            else if(temp<20){
                text.innerText+=" It's getting warmer"
            }
            else if(temp<25){
                text.innerText+=" Almost summer"
            }
            else if(temp>=25){
                text.innerText+=" Get your sun cream and go to the beach "
            }

	        document.getElementById("image").setAttribute('src', weather.current.condition.icon)
            
	     
	 }
    };
    if(document.getElementById("oulu").selected==true){
    xhttp.open("GET", "https://api.weatherapi.com/v1/current.json?key=bc44c2be4a8948448c882920211512&q=Oulu&aqi=no", true);
    xhttp.send();}
    else if(document.getElementById("oslo").selected==true){
    xhttp.open("GET", "https://api.weatherapi.com/v1/current.json?key=bc44c2be4a8948448c882920211512&q=Oslo&aqi=no", true);
    xhttp.send();}
    else if(document.getElementById("sydney").selected==true){
    xhttp.open("GET", "https://api.weatherapi.com/v1/current.json?key=bc44c2be4a8948448c882920211512&q=Sydney&aqi=no", true);
    xhttp.send();}
    else if(document.getElementById("marbella").selected==true){
     xhttp.open("GET", "https://api.weatherapi.com/v1/current.json?key=bc44c2be4a8948448c882920211512&q=Marbella&aqi=no", true);
     xhttp.send();}
    else if(document.getElementById("london").selected==true){
     xhttp.open("GET", "https://api.weatherapi.com/v1/current.json?key=bc44c2be4a8948448c882920211512&q=London&aqi=no", true);
     xhttp.send();}
    else if(document.getElementById("dubai").selected==true){
     xhttp.open("GET", "https://api.weatherapi.com/v1/current.json?key=bc44c2be4a8948448c882920211512&q=Dubai&aqi=no", true);
     xhttp.send();}
}

function tyhjennä(){
    text.innerHTML="The weather comes here"
    jokeText.innerHTML="The joke comes here"
    document.getElementById("image").setAttribute('src', "")
}
document.querySelector("button").addEventListener("click", getWeather)
document.getElementById("printjoke").addEventListener("click", get_joke_of_the_day)
document.getElementById("tyhjennys").addEventListener("click", tyhjennä )

