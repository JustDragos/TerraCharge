//import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import { WebView } from 'react-native-webview';
import React, { Component } from 'react'; 
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-web';
import { render } from 'react-dom';


export function SignIn({navigation}){
        return(
            <View style={styles.main_view}>
                
                <View>
                     <Image
                        style={styles.image}
                        source={require('../assets/logo/logo.jpg')}
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
                    
                    <TouchableOpacity
                        style={styles.submit_button}
                        onPress = {() => {
                            navigation.navigate("Maps", {name: "Maps"});
                        }}
                    >
                        <Text style={styles.submit_text}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                    
                </View>
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 1, height: 5, backgroundColor: 'gray', borderRadius: 50}} />
                    <View>
                        <Text style={{width: 120, textAlign: 'center'}}>Or continue with</Text>
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
        paddingTop: 40,
        paddingBottom: 30
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

