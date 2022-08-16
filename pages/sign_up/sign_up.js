//import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import { WebView } from 'react-native-webview';
import React, { Component } from 'react'; 
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-web';
import { render } from 'react-dom';


export function SignUp({navigation}){
        return(
            <View style={styles.main_view}>
                
                <View>
                     <Image
                        style={styles.image}
                        source={require('../../assets/logo/dpitLogo.png')}
                    />
                    <Text style={styles.title} >
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
                    <TouchableOpacity
                        style={styles.submit_button}
                        onPress = {() => {
                            navigation.navigate("Tabs", {name: "Tabs"})
                        }}
                    >
                        <Text style={styles.submit_text}>
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
                            source = {require('../../assets/Facebook.png')}
                        />
                        <Image
                            style={styles.apple_icon}
                            source = {require('../../assets/Apple.png')}
                        />
                        <Image
                            style={styles.google_icon}
                            source = {require('../../assets/Google.png')}
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
        margin: 30
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
    height: 70,
    width: 300,
    marginTop: 20,
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

