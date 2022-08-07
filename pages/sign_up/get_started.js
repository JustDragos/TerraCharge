import { Dimensions, StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import React, { Component } from 'react'; 
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-web';



export function GetStarted({navigation}) {
    return(
        <View style={styles.main_view}>
            <View>
                <Image
                    style={styles.image}
                    source={require('../../assets/logo/logo.jpg')}
                />
            </View>
            <TouchableOpacity
                style={styles.submit_button}
                onPress = {() => {
                    navigation.navigate('SignUp', { name: 'SignUp' });
                }}
                >
                <Text style={styles.submit_text}>
                    Get Started
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.sign_in_button}
                onPress = {() => {
                    navigation.navigate("SignIn", {name: "SignIn"});
                }}
                >
                <Text style={styles.sign_in_text}>
                    Already have an account?
                </Text>
            </TouchableOpacity>
        </View>
    );
    
    
}


const styles = StyleSheet.create({
    main_view: {
        backgroundColor: "white",
        paddingBottom: 700
    },
    image: {
        marginLeft: 40,
        marginTop: 120,
        marginBottom: 180,
        height: 300,
        width: 300,
        justifyContent: 'center'
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
    },
    sign_in_button: {
        alignItems: "center",
        padding: 20
    },
    sign_in_text: {
        fontFamily: "sans-serif",
        fontWeight: "600",
        fontSize: 20
    }
});