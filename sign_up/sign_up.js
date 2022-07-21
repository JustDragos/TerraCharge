import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import { WebView } from 'react-native-webview';
import React, { Component } from 'react'; 
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-web';
import { render } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


export function SignUp({navigation})
{
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
                    returnKeyLabel='send'
                    placeholder='youremail@email.com'
                />
                <Text style={styles.input_label}>
                    Password
                </Text>
                <TextInput
                    secureTextEntry = {true}
                    style={styles.input}
                    returnKeyLabel='send'
                    placeholder='Enter your password'
                />
                <Text style={styles.input_label}>
                    Confirm password
                </Text>
                <TextInput
                    secureTextEntry = {true}
                    style={styles.input}
                    returnKeyLabel='send'
                    placeholder='Confirm your password'
                />
                
            </View>
            <View style={styles.try_with_container}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                <View>
                    <Text style={{width: 90, textAlign: 'center'}}>Or try with</Text>
                </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                </View>
            </View>
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
            <FontAwesomeIcon icon="fa-brands fa-apple" />
            <FontAwesomeIcon icon="fa-brands fa-google" />
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
        paddingTop: 30,
        paddingBottom: 40,
        margin: 30
    },
    try_with_container: {
        paddingBottom: 400
    }
  });