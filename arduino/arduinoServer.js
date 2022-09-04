var Jfive = require('johnny-five');
var fetch = require('cross-fetch');
var temporal = require("temporal");
const { useEffect, useState } = require('react');


const url = 'https://terra-charge.loca.lt';

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
async function getAsyncLockerStatus() {
	try {
		const response = await fetch(url + '/get_status.json', {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				id: 1
			})
		});
		const json = await response.json();

		return json.results;
	} catch (E) {
		console.log(E);
	}
}

function openLocker(pin) {
	pin.low();
}
function closeLocker(pin) {
	pin.high();
}

function Loop(pin) {

	temporal.loop(5000, function (loop) {
		// every 5 seconds you do this
		console.log("electricity");
		openLocker(pin);
	});
	temporal.loop(7500, function (loop) {
		console.log("no electricity");
		closeLocker(pin);
	});
	return;
}

function getStatusOfLocker() {
	// in here you get the reservations from each user

	return getAsyncLockerStatus().then(function (response) {
		return response;
	});

}


nboard.on('ready', function () {

	// This will set pin 11 high (on)
	// pin.high() closes the electricity for the pin
	// pin.low() opens the electricity for the pin
	var pin = new Jfive.Pin(11);
	closeLocker(pin);
	// Loop(pin);
	temporal.loop(5000, function (loop) {
		// every 5 seconds you do this
		((async () => {
			var status = await getStatusOfLocker();
			if(status.status == false){
				closeLocker(pin);
			}
			else{
				openLocker(pin);
			}
			console.log(status);
		})()).catch(console.error); 
		

	});


	connectToDB();
	// led.blink(1000); // 1 second interval  
});