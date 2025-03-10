
import React from "react";
import { View } from "react-native";


const originalUrl = 'https://terra-charge.loca.lt';
const backupUrl = 'https://terra-charge-backend.loca.lt';
const url = backupUrl;


export async function deleteAllReservations(){
    try {
        const response = await fetch(url + '/delete_reservations.json', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                
            })

        });
        const json = await response.json();
        console.log('Reservation collection changed');

        return json.message;
    } catch (Error) {
        console.error(Error);
        const message = "something went wrong";
        return message;
    }

}

export async function getAsyncLockerStatus() {
    try {
        const response = await fetch(url + '/get_status.json', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                id: "1"
            })
        });
        const json = await response.json();

        return json.results;
    } catch (E) {
        console.log(E);
    }
}

export async function addUser(nameOfUser, emailOfUser, passwordOfUser) {
    try {
        const response = await fetch(url + '/make_user.json', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ name: nameOfUser, email: emailOfUser, password: passwordOfUser })

        });
        const json = await response.json();

        return json.message;


    } catch (Error) {
        console.error(Error);
        const message = "Something went wrong";
        return message;
    }
}

export async function connectToDB() {
    // basic connection model
    try {

        const response = await fetch(url + '/home.json');
        const json = await response.json();
        console.log(json)
    }
    catch (error) {
        console.error(error);
    }
}

export async function verifyUser(emailOfUser, passwordOfUser) {
    try {

        const response = await fetch(url + '/verify_user.json', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ email: emailOfUser, password: passwordOfUser })

        });
        const json = await response.json();

        console.log(json.message);
        return json.message;
    } catch (Error) {
        console.error(Error);
        const message = "something went wrong";
        return message;
    }

}

export async function changeStatusOfLocker(status) {
    try {

        const response = await fetch(url + '/change_status.json', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                newStatus: status
            })

        });
        const json = await response.json();
        console.log('Status changed');

        return json.message;
    } catch (Error) {
        console.error(Error);
        const message = "something went wrong";
        return message;
    }
}

export function openLocker() {
    try {
        ((async () => {
            await changeStatusOfLocker(true);
        })()).catch(console.error);
    } catch (Error) {
        console.error(Error)
    }
}

export async function addReservationAndOpenLocker(emailOfUser, chargerType, paymentMethod, hour, date) {
    await Promise.all([
        await changeStatusOfLocker(true),
        await addReservation(emailOfUser, chargerType, paymentMethod, hour, date),
        
    ]).then(() => console.log('All promises resolved')).catch((Error) => {
        console.log(Error);
    });
}

export async function addReservation(emailOfUser, chargerType, paymentMethod, hour, date) {
    try {
        const response = await fetch(url + '/create_reservation.json', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                chargerType: chargerType,
                paymentMethod: paymentMethod,
                date: date,
                hour: hour,
                emailOfUser: emailOfUser,
            })

        });
    } catch (Error) {
        console.error(Error);

    }
}

export async function getReservations(emailOfUser) {
    try {

        var reservations = await ((async () => {
            const response = await fetch(url + '/get_reservations.json', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    email: emailOfUser
                })

            });
            var message = await response.json()
            var arrayOfReservations = message.results.flat();

            return arrayOfReservations;

        })()).catch(console.error);

        return reservations


    } catch (Error) {
        console.error(Error);
        return [];
    }
}

export function DatabaseHandler() {
    // addUser("Luca", "dex5@gmail.com", "234q");
    // verifyUser("dex8@gmail.com", "1214");

    //the one above can return in res.json:
    // user exists - user is in database
    // valid user - user put correct email and password
    // wrong password - user put correct emal and wrong password
    // user inexistent - there is no user with that email

    // use it like this:
    /*
                        ((async () => {
                            var message = await verifyUser(emailOfUser, passwordOfUser);
                            alert(message);
                        })()).catch(console.error); 
    
    */

    return (
        <View>


        </View>
    );
}