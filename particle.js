var accessToken = "ef863e1c826c1e21e18eb4b443721f0b01f6e894";
var deviceID = "220021001947393035313138"
var url = "https://api.particle.io/v1/devices/" + deviceID + "/gradosC";
var url2 = "https://api.particle.io/v1/devices/" + deviceID + "/humedad";
function callback(data, status){
	if (status == "success") {
		temp = parseFloat(data.result);
		temp = temp.toFixed(2);
		g.refresh(temp);
		setTimeout(getReading, 1000);
	}
	else {
		alert("There was a problem");
	}
}
function callback2(data, status){
	if (status == "success") {
		temp = parseFloat(data.result);
		temp = temp.toFixed(2);
		g2.refresh(temp);
		setTimeout(getReading2, 1000);
	}
	else {
		alert("There was a problem");
	}
}
function getReading(){
   	$.get(url, {access_token: accessToken}, callback);
}

function getReading2(){
	$.get(url2, {access_token: accessToken}, callback2);
}