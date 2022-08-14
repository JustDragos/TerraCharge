import React, { useRef, useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { texts } from '../maps/styles';


function OverviewFunction({ route }) {
    const station = route.params.station;
    return (

        <View style={{ alignContent: 'flex-start', width: "100%", marginLeft: "5%" }}>
            <ScrollView>
                <View style={[styles.sameRowElement, { height: 50, marginTop: 5, alignItems: 'center' }]}>
                    <View style={styles.circleOfImage}>
                        <Image
                            source={require('../../assets/mapPin.png')}
                            style={styles.appearanceOfImage}
                        />
                    </View>
                    <Text
                        numberOfLines={2}

                        style={[styles.textInOneLine, { width: 300 }]}
                    >
                        {station.longAddress}</Text>
                </View>
                <View style={[styles.sameRowElement, { height: "100%", marginTop: 5, }]}>
                    <View
                        style={styles.circleOfImage}>
                        <Image
                            source={require('../../assets/fi_phone-call.png')}
                            style={styles.appearanceOfImage}
                        />
                    </View>
                    <Text
                        numberOfLines={1}
                        style={styles.textInOneLine}
                    >
                        +40 0740 xxx xxx
                    </Text>
                </View>
                <View style={[styles.sameRowElement, { height: "100%", marginTop: 5, alignItems: 'center', }]}>
                    <View style={styles.circleOfImage}>
                        <Image
                            source={require('../../assets/mail.png')}
                            style={styles.appearanceOfImage}
                        />
                    </View>
                    <Text
                        numberOfLines={1}
                        style={styles.textInOneLine}
                    >
                        terra_charge@gmail.com
                    </Text>
                </View>
            </ScrollView>
        </View>

    );
}
function ReviewsFunction() {
    return (
        <Text> Reviews</Text>
    );
}
function LocationFunction() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: 100 }}>
            <Text>Location things</Text>
        </View>

    );
}
function generateTopTab(station, Tab) {
    return (
        <View style={{ height: "33%" }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarScrollEnabled: true,
                    tabBarIndicatorStyle: {
                        backgroundColor: "#95D2FF",
                        height: "100%",
                        borderRadius: 10,
                    },
                    tabBarLabelStyle: { fontSize: 12, textTransform: 'none', alignContent: 'center' },
                    tabBarStyle: {
                        height: 40,
                        width: "90%",

                        justifyContent: 'center',
                        backgroundColor: '#f1f1f1',
                        marginBottom: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        borderRadius: 10,
                    },

                }}
                sceneContainerStyle={{ backgroundColor: "white", width: "50%" }}
            >
                <Tab.Screen name='Overview' component={OverviewFunction} initialParams={{ station: station }} />
                <Tab.Screen name='Reviews' component={ReviewsFunction} />
                <Tab.Screen name='Location' component={LocationFunction} />
            </Tab.Navigator>
        </View>
    );
}
function generatePhotoContainer(navigation) {
    return (
        <View
            style={{ width: "100%", height: "35%", overflow: 'visible' }}
        >

            <ImageBackground
                source={require('../../assets/chargingStationImage.png')}
                style={{ height: "100%", }}
                imageStyle={{ height: "117%" }}
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[{ height: "10%", width: 20, marginTop: "5%" }]}
                    source={require('../../assets/chargingStationImage.png')}
                >

                    <View
                        style={[styles.circleOfImage, { backgroundColor: '#8eb994', borderRadius: 20, height: 60, width: 45, marginLeft: 10, }]}>
                        <Image
                            style={{ width: 50, height: 50, tintColor: 'white', }}
                            source={require('../../assets/navigators/go_back.png')}
                        />
                    </View>
                </TouchableOpacity>





            </ImageBackground>

        </View>
    );
}
function generateInformationContainer(station, Tab) {
    const [isFavourite, setIsFavourite] = useState(station.isFavourite)
    return (<View style={styles.informationContainer}>
        <View
            style={{ alignSelf: 'flex-end', justifyContent: 'flex-end', width: 50, height: 50,marginTop: -45}}
        >
            <Image
                style={{ aspectRatio: 1.0, alignSelf: 'center', tintColor: 'black', width: 50, height: 50, tintColor: 'white' }}
                source={require('../../assets/ramp1.png')}
            />
        </View>
        <View
            style={{ flexDirection: 'row' }}
        >

            <View style={{ alignItems: 'flex-start', marginLeft: "5%" }}>
                <Text style={{ fontWeight: 'bold', fontSize: 26, marginTop: "10%" }}>
                    {station.shortAddress}
                </Text>
                <AirbnbRating
                    defaultRating={station.rating}
                    count={5}
                    size={30}
                    fractions="1"
                    selectedColor='#95D2FF'
                    isDisabled={true}
                    showRating={false}
                />
                <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginBottom: "2%" }}>
                    <Text style={station.status == 1 ? texts.greenText : texts.redText}>
                        {station.status == 1 ? "Open" : "Closed"}
                    </Text>

                    <View
                        style={{ marginTop: "3%", marginLeft: "3%" }}
                    >
                        <Image
                            source={require("../../assets/Vector-13.png")}
                            style={{
                                tintColor: 'grey',

                            }}
                        />
                    </View>
                    <Text style={{ marginBottom: "20%", marginLeft: "5%" }}>
                        open from {station.hoursOpened[0]} to {station.hoursOpened[1]}
                    </Text>
                </View>

            </View>
            <TouchableOpacity style={isFavourite == 0 ? styles.styleForNotFavourite : styles.styleForFavourite}
                onPress={() => [setIsFavourite(!isFavourite), station.isFavourite = !station.isFavourite]}
            >
                <Image
                    style={[{ width: 20, height: 20, tintColor: 'grey' }, isFavourite == 1 ? { tintColor: 'white' } : { tintColor: 'grey' }]}
                    source={require('../../assets/full_heart.png')}
                />
            </TouchableOpacity>
        </View>

        {/* below needs modifications so that top bar has buttons instead of tabs*/}

        {generateTopTab(station, Tab)}

        {/*Up untill here */}
        <TouchableOpacity style={[styles.button, { backgroundColor: '#95D2FF', alignSelf: 'center', width: '90%', height: 50, marginLeft: "20%", marginTop: "1%", marginRight: "20%", marginBottom: "3%", }]}>
            <Text style={{ color: 'white', fontSize: 20 }}>
                Reserve now
            </Text>
        </TouchableOpacity>
    </View>);
}
export function PageOfStation({ route, navigation }) {
    const Tab = createMaterialTopTabNavigator();
    const { station } = route.params;
    return (
        <View style={styles.container}>
            {generatePhotoContainer(navigation)}
            {generateInformationContainer(station, Tab)}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",

    },
    blackText: {
        color: "black",
        fontWeight: "600",
    },
    button: {
        height: 50,
        width: 150,

        backgroundColor: "#140078",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "3%",
        marginRight: "3%",
        alignSelf: "center",
        borderRadius: 20,
        shadowColor: "#8559da",
        shadowOpacity: 0.7,
        shadowOffset: {
            height: 4,
            width: 4,
        },
        flexDirection: "row",
        shadowRadius: 5,
        elevation: 6,
    },
    sameRowElement: {
        marginTop: 30,
        flexDirection: "row",
        flex: 1,
    },
    informationContainer: {
        width: "100%",
        height: "100%",
        top: "35%",
        position: 'absolute',
        flex: 1,
        borderColor: 'grey',
        borderWidth: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: -5,
        backgroundColor: 'white',
    },
    photosContainer: {
        borderWidth: 0,
        height: "30%",
        flexDirection: "row",
        marginTop: 30,

    },
    appearanceOfImage: {
        width: 25,
        height: 25,
        tintColor: 'white'
    },
    circleOfImage: {
        width: 45,
        height: 45,
        backgroundColor: "#95D2FF",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    styleForFavourite: {
        width: 45,
        height: 45,
        marginRight: "5%",
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: "15%",
        alignSelf: 'center',
        borderRadius: 50,
        backgroundColor: '#95D2FF',

    },
    textInOneLine: {
        alignSelf: 'center',
        marginLeft: "3%",
        marginRight: "4%",
    },
    styleForNotFavourite: {
        width: 45,
        height: 45,
        marginRight: "5%",
        alignItems: 'center',
        marginLeft: "15%",
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 50,
    },

});