const express = require("express");
const https = require("https");

const app = express();




app.get("/", function(req, res){

const url = "https://api.openweathermap.org/data/2.5/weather?q=Cochin&appid=a41e36fc67d688385e4d7eaad78e623f#";
 https.get(url, function(response){
   console.log(response);

   var weatherData = JSON.parse(response.toString());
   var temperature= weatherData.main.temp;
   var description = weatherData.weather[0].description;
   res.send("The Temperature is "+temperature+" Degree Celcius");
 })
});

app.listen(3000, function(){
  console.log("Server is Running on Port 3000");
});
