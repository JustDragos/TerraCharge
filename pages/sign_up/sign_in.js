//import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import React, { Component, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-web';
import { render } from 'react-dom';
import { buttons } from '../maps/styles';
import { verifyUser } from '../../database/databaseHandler';
import { User } from '../../domain/user';



export function SignIn({ navigation }) {
    const [emailOfUser, setEmailOfUser] = useState(null);
    const [passwordOfUser, setPasswordOfUser] = useState(null);
    return (
        <View style={[styles.main_view,]}>
            <View>
                <Image
                    style={styles.image}
                    source={require('../../assets/logo/dpitLogo.png')}
                />
                <Text style={styles.title} >
                    Sign In
                </Text>
            </View>

            <View style={styles.input_container}>
                <Text style={styles.input_label}>
                    E-mail
                </Text>
                <TextInput
                    keyboardType='email-address'
                    style={styles.input}
                    returnKeyLabel='send'
                    onChangeText={newEmail => setEmailOfUser(newEmail)}
                    placeholder='youremail@email.com'
                />
                <Text style={styles.input_label}>
                    Password
                </Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    returnKeyLabel='send'
                    onChangeText={newPassword => setPasswordOfUser(newPassword)}
                    placeholder='Enter your password'
                />

                <TouchableOpacity
                    style={styles.submit_button}
                    onPress={() => {
                        // navigation.navigate("Tabs", {name: "Tabs"});
                        ((async () => {
                            var message = await verifyUser(emailOfUser, passwordOfUser);
                            if (message != "valid user") {
                                alert(message);
                            }
                            if (message == "valid user") {
                                var user = new User(emailOfUser, passwordOfUser);
                                navigation.navigate('Tabs', { user: user})
                            }
                        })()).catch(console.error);
                    }}
                >
                    <Text style={styles.submit_text}>
                        Sign In
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={{ marginBottom: "10%" }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 5, backgroundColor: 'gray', borderRadius: 50 }} />
                    <View>
                        <Text style={{ width: 120, textAlign: 'center' }}>Or continue with</Text>
                    </View>
                    <View style={{ flex: 1, height: 5, backgroundColor: 'gray', borderRadius: 50 }} />
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
        borderTopColor: 'white',
        borderRightColor: 'white',
        borderLeftColor: 'white',
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    image: {
        marginTop: 60,
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    title: {
        fontWeight: 'bold',
        paddingTop: 20,
        fontSize: 35,
        fontFamily: 'sans-serif',
        textAlign: 'center'
    },
    input_label: {
        marginLeft: 20,
        fontFamily: 'sans-serif',
        fontSize: 20,
    },
    input_container: {
        margin: 30,
        marginTop: "5%",
        paddingTop: "4%",
        marginBottom: "10%",
    },
    try_with_container: {
        paddingTop: 10,
        marginBottom: "10%",
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
        height: 70,
        width: 300,
        marginTop: 50,
        backgroundColor: 'deepskyblue',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    submit_text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700'
    }
});

