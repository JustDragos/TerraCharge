import React from 'react';
import { Text, View, StyleSheet, Button, Image, Pressable, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

export function WebSite({ navigation }) {
    return (
        <View style={styles.mainCointainer}>
            <View style={styles.firstContainer}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/navigators/go_back.png')} style={styles.backIcon} />
                    </TouchableOpacity>
                </View>
                <View style={{ paddingLeft: 200 }}>
                    <Image source={require('../../assets/logo/dpitLogo.png')} style={styles.backIcon} />
                </View>
            </View>
            <View style={styles.secoundContainer}>
                <WebView source={{ uri: 'https://terrachargestations.github.io/TerraChargeWebsite/' }} />
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    mainCointainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'center',
        backgroundColor: '#fff',
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 80,
        paddingTop: 70
    },
    firstContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 20,
        flex: 1,
        
    },
    secoundContainer: {
        flex: 10,
    },
    backIcon: {
        resizeMode: 'center',
        width: 60,
        height: 60
    },
})