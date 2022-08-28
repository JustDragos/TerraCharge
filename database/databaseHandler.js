
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NetworkInfo } from 'react-native-network-info';
import publicIP from 'react-native-public-ip';

const url = 'https://terra-charge.loca.lt';

async function getIpAddress() {

    // Get Local IP
    try {
        publicIP().then(ip =>{
            console.log(ip);
        }).catch(error => {
            console.log(error);
        }); 

    } catch (E) {

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

        console.log(json)

    } catch (Error) {
        console.error(Error);
    }
}

async function connectToDB() {
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