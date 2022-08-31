import React from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity, Alert } from 'react-native';


export function Profiles({ navigation, route }) {
    const user = route.params.user;
    const logoutAlert = () => {
        Alert.alert(
            'Log out',
            'Are you sure you want to log out ?',
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        navigation.navigate('GetStarted')
                    },
                },
                {
                    text: 'No',
                }
            ]
        )
    }
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
                <View style={{ flex: 1, paddingRight: 30 }}>
                    <Image source={require('../../assets/emote.png')} style={{ width: 100, height: 100 }} />
                </View>
                <View style={{ flexDirection: 'column', flex: 2, justifyContent: 'center' }}>
                    <View style={{ paddingBottom: 6 }}>
                        <Text style={{ color: '#828282', fontSize: 20 }}>Welcome</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000000', fontSize: 20, fontWeight: '600' }}>Mister David</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={logoutAlert}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Image source={require('../../assets/fi_log-out.png')} style={{ width: 40, height: 40 }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.thirdContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('PaymentHistory')}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                        <View style={{}}>
                            <Image source={require('../../assets/payment.png')} style={{ width: 25, height: 25 }} />
                        </View>
                        <View style={{}}>
                            <Text style={styles.payment}>Payment history</Text>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Image source={require('../../assets/navigators/go_forward.png')} style={{ width: 15, height: 15 }} />

                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ padding: 10, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ borderLeftColor: '#4D88ED', borderLeftWidth: 1.5, flex: 13 }}>
                        <Text> </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('PaymentMethod')}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                        <View style={{}}>
                            <Image source={require('../../assets/Vector-9.png')} style={{ width: 20, height: 20 }} />
                        </View>
                        <View style={{}}>
                            <Text style={styles.payment}>Payment method</Text>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Image source={require('../../assets/navigators/go_forward.png')} style={{ width: 15, height: 15 }} />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ padding: 10, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ borderLeftColor: '#5F60E9', borderLeftWidth: 1.5, flex: 13 }}>
                        <Text> </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('SettingsTab')}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                        <View style={{}}>
                            <Image source={require('../../assets/Subtract.png')} style={{ width: 25, height: 25 }} />
                        </View>
                        <View style={{ paddingRight: 80 }}>
                            <Text style={styles.payment}>Settings</Text>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Image source={require('../../assets/navigators/go_forward.png')} style={{ width: 15, height: 15 }} />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ padding: 10, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ borderLeftColor: '#6D42E6', borderLeftWidth: 1.5, flex: 13 }}>
                        <Text> </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('WebSite')}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                        <View style={{ flex: 2 }}>
                            <Image source={require('../../assets/Vector-3.png')} style={{ width: 33, height: 22 }} />
                        </View>
                        <View style={{ flex: 3, paddingRight: 20 }}>
                            <Text style={styles.payment}>Find us</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 2 }}>
                            <View style={{ justifyContent: 'center' }}>
                                <Image source={require('../../assets/InstagramGray.png')} style={{ width: 22, height: 22 }} />
                            </View>
                            <View style={{ justifyContent: 'center' }}>

                                <Image source={require('../../assets/FacebookGray.png')} style={{ width: 23, height: 23 }} />

                            </View>
                            <View style={{ justifyContent: 'center' }}>

                                <Image source={require('../../assets/TwitterGray.png')} style={{ width: 25, height: 25 }} />

                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.fourthContainer}>
                <View style={{ justifyContent: 'center' }}>
                    <Image source={require('../../assets/fi_phone-call.png')} style={{ width: 50, height: 50 }} />
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.help}>How can we help you ?</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ justifyContent: 'center' }}>
                    <Image source={require('../../assets/Copyright-Symbol.png')} style={{ width: 10, height: 10 }} />
                </View>
                <View>
                    <Text>TerraCharge. All rights reserved</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainCointainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignContent: 'center',
        backgroundColor: '#fff',
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 80
    },
    firstContainer: {
        flexDirection: 'row',
    },
    secoundContainer: {
        flexDirection: 'row',
        borderBottomColor: '#828282',
        borderBottomWidth: 1,
        borderTopColor: '#828282',
        borderTopWidth: 1,
        paddingLeft: 15,
    },
    thirdContainer: {
        justifyContent: 'center',
        paddingTop: 50,
        paddingBottom: 50
    },
    backIcon: {
        resizeMode: 'center',
        width: 60,
        height: 60
    },
    payment: {
        color: '#363636',
        fontSize: 22
    },
    fourthContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#F2FDFF',
        borderRadius: 15,
        paddingRight: 50,
        height: 70,
    },
    help: {
        color: '#4CB4FF',
        fontWeight: '700'
    },
})