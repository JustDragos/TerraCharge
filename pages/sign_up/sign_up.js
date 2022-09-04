//import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import React, { Component, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-web';
import { render } from 'react-dom';
import { User } from '../../domain/user';
import { addUser } from '../../database/databaseHandler';

export function SignUp({ navigation }) {
    const [emailOfUser, setEmailOfUser] = useState("");
    const [passwordOfUser, setPasswordOfUser] = useState("");
    const [nameOfUser, setNameOfUser] = useState("");
    const [confirmedPasswordOfUser, setConfirmedPasswordOfUser] = useState("");
    return (
        <View style={styles.main_view}>

            <View>
                <View style={{ flexDirection: 'row', marginTop: "5%" }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/navigators/go_back.png')} style={{ resizeMode: 'center', width: 60, height: 60 }} />
                    </TouchableOpacity>
                    <Image
                        style={[styles.image, {marginLeft: "13%"}]}
                        source={require('../../assets/logo/dpitLogo.png')}
                    />

                </View>
                <Text style={styles.title} >
                    Sign Up
                </Text>
            </View>

            <View style={styles.input_container}>
                <Text style={styles.input_label}>
                    User name
                </Text>
                <TextInput
                    style={styles.input}
                    returnKeyLabel='send'
                    placeholder='username'
                    onChangeText={newNameOfUser => setNameOfUser(newNameOfUser)}
                />
                <Text style={styles.input_label}>
                    E-mail
                </Text>
                <TextInput
                    keyboardType='email-address'
                    style={styles.input}
                    returnKeyLabel='send'
                    placeholder='youremail@email.com'
                    onChangeText={newEmail => setEmailOfUser(newEmail)}
                />
                <Text style={styles.input_label}>
                    Password
                </Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    returnKeyLabel='send'
                    placeholder='Enter your password'
                    onChangeText={newPassword => setPasswordOfUser(newPassword)}
                />
                <Text style={styles.input_label}>
                    Confirm password
                </Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    returnKeyLabel='send'
                    placeholder='Confirm your password'
                    onChangeText={newConfirmedPassword => setConfirmedPasswordOfUser(newConfirmedPassword)}
                />
                <TouchableOpacity
                    style={styles.submit_button}
                    onPress={() => {
                        if (passwordOfUser == confirmedPasswordOfUser && passwordOfUser != "" && emailOfUser != "") {

                            ((async () => {
                                var message = await addUser(nameOfUser, emailOfUser, passwordOfUser);
                                console.log(message);
                                var user = new User(nameOfUser, emailOfUser);
                                navigation.navigate('Tabs', { user: user })
                            })()).catch(console.error);
                        }
                        else {
                            alert("passwords don't match");
                        }
                    }}
                >
                    <Text style={styles.submit_text}>
                        Sign Up
                    </Text>
                </TouchableOpacity>

            </View>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: "3%" }}>
                    <View style={{ width: "20%",marginLeft: "15%", height: 5, backgroundColor: 'grey', borderRadius: 50 }} />
                    <View>
                        <Text style={{ width: 90, textAlign: 'center' }}>Or try with</Text>
                    </View>
                    <View style={{ width: "20%", marginRight: "20%", height: 5, backgroundColor: 'grey', borderRadius: 50 }} />
                </View>
                <View style={styles.try_with_container}>
                    <Image
                        style={styles.facebook_icon}
                        source={require('../../assets/Facebook.png')}
                    />
                    <Image
                        style={styles.apple_icon}
                        source={require('../../assets/Apple.png')}
                    />
                    <Image
                        style={styles.google_icon}
                        source={require('../../assets/Google.png')}
                    />
                </View>

            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    main_view: {
        backgroundColor: 'white'
    },
    input: {
        height: 45,
        width: "70%",
        borderTopColor: 'white',
        borderRightColor: 'white',
        borderLeftColor: 'white',
        marginLeft: "10%",
        borderWidth: 1,
        
    },
    image: {
        marginTop: "4%",
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    title: {
        fontWeight: 'bold',
        marginTop: "1%",
        fontSize: 35,
        fontFamily: 'sans-serif',
        textAlign: 'center'
    },
    input_label: {
        marginLeft: "10%",
        marginTop: "2%",
        fontFamily: 'sans-serif',
        fontSize: 20,
    },
    input_container: {
        marginLeft: "7%",
        marginRight: "5%",   
    },
    try_with_container: {
        paddingTop: 10,
        paddingBottom: 400,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    facebook_icon: {
        height: 70,
        width: 70
    },
    apple_icon: {
        height: 70,
        width: 70
    },
    google_icon: {
        height: 70,
        width: 70
    },
    submit_button: {
        width: "60%",
        height: 75,
        marginTop: 20,
        alignSelf: 'center',
        marginLeft: "15%",
        marginRight: "15%",
        backgroundColor: 'deepskyblue',
        justifyContent: 'center',
        
        alignItems: 'center',
        borderRadius: 20
    },
    submit_text: {
        color: 'white',
        fontSize: 20,
        width: 100,
       fontWeight: '700'
    }
});

