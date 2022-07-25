//import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import { WebView } from 'react-native-webview';
import React, { Component } from 'react'; 
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-web';
import { render } from 'react-dom';
import {registerUser} from "./sign_up_backend.js"


export class SignUp extends Component{
    state = {
        email: "",
        password1: "",
        password2: ""
    }

    submit() {
        console.warn("email: ", this.state.email, "password1: ", this.state.password1, "password2: ", this.state.password2);
    }

    render() {
        return(
            <View style={styles.main_view}>
                
                <View>
                     <Image
                        style={styles.image}
                        source={require('../assets/logo/logo.jpg')}
                    />
                    <Text style={styles.sign_up} >
                        Sign Up
                    </Text>
                </View>
    
                <View style={styles.input_container}>
                    <Text style={styles.input_label}>
                        E-mail
                    </Text>
                    <TextInput
                        keyboardType='email-address'
                        style={styles.input}
                        onChangeText = {(text) => {
                            this.setState({
                                email: text
                            });
                        }}
                        returnKeyLabel='send'
                        placeholder='youremail@email.com'
                    />
                    <Text style={styles.input_label}>
                        Password
                    </Text>
                    <TextInput
                        secureTextEntry = {true}
                        style={styles.input}
                        onChangeText = {(text) => {
                            this.setState({
                                password1: text
                            });
                        }}
                        returnKeyLabel='send'
                        placeholder='Enter your password'
                    />
                    <Text style={styles.input_label}>
                        Confirm password
                    </Text>
                    <TextInput
                        secureTextEntry = {true}
                        style={styles.input}
                        onChangeText = {(text) => {
                            this.setState({
                                password2: text
                            });
                        }}
                        returnKeyLabel='send'
                        placeholder='Confirm your password'
                    />
                    <TouchableOpacity
                        style={styles.sign_up_button}
                        onPress = {() => {
                            this.submit();
                        }}
                    >
                        <Text style={styles.sign_up_text}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    
                </View>
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 1, height: 5, backgroundColor: 'gray', borderRadius: 50}} />
                    <View>
                        <Text style={{width: 90, textAlign: 'center'}}>Or try with</Text>
                    </View>
                        <View style={{flex: 1, height: 5, backgroundColor: 'gray', borderRadius: 50}} />
                    </View>
                    <View style={styles.try_with_container}>
                        <Image
                            style={styles.facebook_icon}
                            source = {require('../assets/try_with_icons/facebook.png')}
                        />
                        <Image
                            style={styles.apple_icon}
                            source = {require('../assets/try_with_icons/apple.png')}
                        />
                        <Image
                            style={styles.google_icon}
                            source = {require('../assets/try_with_icons/google.png')}
                        />
                    </View>
                    
                </View>
                
            </View>
        );
    }
        
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
        marginLeft: 120,
        height: 150,
        width: 150,
        justifyContent: 'center'
    },
    sign_up: {
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
        margin: 30
    },
    try_with_container: {
        paddingTop: 30,
        paddingBottom: 400,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    facebook_icon: {
        height: 40,
        width: 40
    },
    apple_icon: {
        height: 36,
        width: 36
    },
    google_icon: {
        height: 36,
        width: 36
    },
    sign_up_button: {
    height: 70,
    width: 300,
    marginTop: 20,
    backgroundColor: 'deepskyblue',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20
    },
    sign_up_text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700'
    }
  });

