var accessToken = "ef863e1c826c1e21e18eb4b443721f0b01f6e894";
var deviceID = "220021001947393035313138"
var url = "https://api.particle.io/v1/devices/" + deviceID + "/dispensador";


function switchOn()
{
	$.post(url, {params: "on", access_token: accessToken })
	.done(switchIMG);
}

function switchIMG(data) {
    var rv = data.return_value;
    $("#return_value").text(rv);
    if(rv == 1){
		$("#status").text("Bebida preparada").css("display", "block");
        setTimeout(desaparecer, 3000);
    }
    else {
        $("#status").text("Disconnected");
    }
}

function desaparecer(){
    $("#status").css("display", "none"); // ocultar la etiqueta después de 3 segundos
}