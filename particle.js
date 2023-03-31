var accessToken = "ef863e1c826c1e21e18eb4b443721f0b01f6e894";
var deviceID = "220021001947393035313138"
var url = "https://api.particle.io/v1/devices/" + deviceID + "/led";
var datos_json;

function switchOn()
{
	$.post(url, {params: "on", access_token: accessToken })
	.done(switchIMG);
}  

function switchOff()
{
	$.post(url, {params: "off", access_token: accessToken })
	.done(switchIMG);
}

function switchIMG(data) {
    var rv = data.return_value;
    $("#return_value").text(rv);
    if(rv == 1){
        pic = "focoTurnOn.png"
		$("#status").text("Connected");
    }
    else if(rv == 0){
        pic = "focoTurnOff.png"
		$("#status").text("Connected");
    } else {
        pic = "connectionlost.png"
		$("#status").text("Disconnected");
    }
    document.getElementById("myImage").src = pic;
}