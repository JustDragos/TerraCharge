var Jfive = require('johnny-five');
var fetch = require('cross-fetch');


const url =  'https://terra-charge.loca.lt';

var nboard = new Jfive.Board(
	{
		port: "Com3"
	}
);

async function connectToDB() {
	try {

        const response = await fetch(url + '/home.json');
        const json = await response.json();
        console.log(json)
    }
    catch (error) {
        console.error(error);
    }
}

nboard.on('ready', function () {
	var led = new Jfive.Led(11);
	connectToDB();
	// led.blink(1000); // 1 second interval  
});