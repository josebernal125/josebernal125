var accessToken = "ef863e1c826c1e21e18eb4b443721f0b01f6e894";
var deviceID = "220021001947393035313138"
var url = "https://api.particle.io/v1/devices/" + deviceID + "/led";
document.getElementById("myImage").src = pic;

function switchOn()
{
	$.post(url, {params: "on", access_token: accessToken });
	pic = "focoTurnOn.png"
}  

function switchOff()
{
	$.post(url, {params: "off", access_token: accessToken });
	pic = "focoTurnOff.png"
}  