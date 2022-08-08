import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AirbnbRating, Rating } from 'react-native-ratings';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { texts } from '../maps/styles';

function OverviewFunction({ route }) {
    const station = route.params.station;
    return (

        <View style={{ alignContent: 'flex-start', width: "100%"}}>
            <ScrollView>
                <View style={[styles.sameRowElement, { width: 150, height: "100%", marginTop: 5 }]}>
                    <Image
                        source={require('../../assets/battery1.png')}
                        style={{ resizeMode: 'contain', aspectRatio: 2.0, }}
                    />
                    <Text style={{ width: "100%", alignSelf: 'center' }}>{station.longAddress}</Text>
                </View>
                <View style={[styles.sameRowElement, { width: 150, height: "100%", marginTop: 5, alignContent: 'flex-start' }]}>

                    <Image
                        source={require('../../assets/fi_phone-call.png')}
                        style={styles.circleOfImage}
                    />

                    <Text style={{ alignSelf: 'center', marginLeft: "10%" }}>
                        +40 0740 xxx xxx
                    </Text>
                </View>
                <View style={[styles.sameRowElement, { width: 150, height: 50, marginTop: 5 }]}>
                    <Image
                        source={require('../../assets/info.png')}
                        style={{ tintColor: "#95D2FF", resizeMode: 'contain', aspectRatio: 2.0, alignSelf: 'center' }}
                    />
                    <Text style={{ alignSelf: 'center' }}>
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

            sceneContainerStyle={{ backgroundColor: "white" }}
        >
            <Tab.Screen name='Overview' component={OverviewFunction} initialParams={{ station: station }} />
            <Tab.Screen name='Reviews' component={ReviewsFunction} />
            <Tab.Screen name='Location' component={LocationFunction} />
        </Tab.Navigator>
    );
}
function generatePhotoContainer(navigation) {
    return (
        <View style={[styles.photosContainer]}>
            {/* the view above is to make them on the same line*/}
            <TouchableOpacity onPress={() => navigation.goBack()}
                style={styles.sameRowElement}
            >

                <View>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/navigators/go_back.png')}
                    />
                </View>
            </TouchableOpacity>
            <Image
                source={require("../../assets/battery2.png")}
            />

        </View>
    );
}
function generateInformationContainer(station, Tab) {
    return (<View style={styles.informationContainer}>
        <Text style={{ marginLeft: "20%", fontWeight: 'bold', fontSize: 26, marginTop: "10%" }}>
            {station.shortAddress}
        </Text>
        <AirbnbRating
            defaultRating={station.rating}
            count={5}
            size={30}
            fractions="1"
            isDisabled={true}
            showRating={false}
        />
        <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: '25%', marginBottom: 10 }}>
            <Text style={station.status == 1 ? texts.greenText : texts.redText}>
                {station.status == 1 ? "Open" : "Closed"}
            </Text>

            <View
                style={{ marginTop: 7, marginLeft: 4 }}
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
        {/* below needs modifications*/}

        {generateTopTab(station, Tab)}

        {/*Up untill here */}
        <TouchableOpacity style={[styles.button, { backgroundColor: '#95D2FF', alignSelf: 'center', width: '90%', height: "10%", marginLeft: "20%", marginRight: "20%", marginBottom: "8%"}]}>
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
        justifyContent: "space-between"
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
        marginBottom: 50,
        marginRight: 50,
        alignSelf: "flex-end",
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
        flex: 1,
        borderColor: 'grey',
        borderWidth: 0,
        borderTopLeftRadius: 50,
        backgroundColor: 'white',
    },
    photosContainer: {
        borderWidth: 0,
        height: "30%",
        flexDirection: "row",
        marginTop: 30,
    },
    circleOfImage: {
        tintColor: 'white',
        resizeMode: 'contain',
        marginLeft: 20,
        backgroundColor: "#95D2FF",
        borderRadius: 30,
        width: 30,
        height: 30
    }
});