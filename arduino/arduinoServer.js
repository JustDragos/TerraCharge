var Jfive = require('johnny-five');
var fetch = require('cross-fetch');
var temporal = require("temporal");

const originalUrl = 'https://terra-charge.loca.lt';
const backupUrl = 'https://terra-charge-backend.loca.lt';
const url = backupUrl;



var nboard = new Jfive.Board(
	{
		port: "Com5"
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

 async function changeAsyncStatusInDatabase(){
	try {
		const response = await fetch(url + '/change_status.json', {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				newStatus: false
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

function closeAfterInterval(time, pin){
	openLocker(pin);
	setTimeout(function() {
		closeLocker(pin);

	}, time);
};

async function closeLockerDatabase(){
	return changeAsyncStatusInDatabase().then(function (response) {
		return response;
	});

}

function temporaryOpen(time, pin){
	closeAfterInterval(time, pin);
	// this is supposed to closed 
	((async () => {
		await closeLockerDatabase();
		
	})()).catch(console.error);
	
}

nboard.on('ready', function () {

	// This will set pin 11 high (on)
	// pin.high() closes the electricity for the pin
	// pin.low() opens the electricity for the pin
	console.log()
	var pin = new Jfive.Pin(11);
	closeLocker(pin);
	
	// Loop(pin);
	temporal.loop(5000, function (loop) {
		// every 5 seconds you do this
		// it can be modified but then there are too many requests to the database
		((async () => {
			var status = await getStatusOfLocker();
			if(status.status == false){
				closeLocker(pin);
			}
			else{
				temporaryOpen(5000, pin);
				//temporaryOpen(5000, pin);

			}
			console.log(status);
		})()).catch(console.error); 
		

	});


	connectToDB();
	// led.blink(1000); // 1 second interval  
});