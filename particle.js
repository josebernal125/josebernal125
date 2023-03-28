var accessToken = "ef863e1c826c1e21e18eb4b443721f0b01f6e894";
var deviceID = "220021001947393035313138"
var parOn = "on"
var parOff = "off"
var url = "https://api.particle.io/v1/devices/" + deviceID + "/led -d access_token="+ accessToken + "- d params=";


function getReadingOn(){
   	$.get(url, parOn);
}

function getReadingOff(){
    $.get(url, parOff);
}