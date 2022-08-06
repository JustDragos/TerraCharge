import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AirbnbRating, Rating } from 'react-native-ratings';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function OverviewFunction() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: 100 }}>
            <Text>Aici trebuie sa apara stats</Text>
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
            <Text>Aici trebuie sa apara stats</Text>
        </View>

    );
}

export function PageOfStation({ route, navigation }) {
    const Tab = createMaterialTopTabNavigator();
    const { station } = route.params;
    return (
        <View style={styles.container}>
            <View
                style={styles.sameRowElement}
            >
                {/* the view above is to make them on the same line*/}
                <TouchableOpacity onPress={() => navigation.goBack()}
                    style={styles.sameRowElement}
                >
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/fi_chevron-left.png')}
                    />
                </TouchableOpacity>
                <Image
                    source={require("../../assets/battery2.png")}
                />

            </View>



            <Text>{station.address}</Text>
            <AirbnbRating
                defaultRating={station.rating}
                count={5}
                size={30}
                fractions="1"
                isDisabled={true}
                showRating={false}
            />
            {/* below needs modifications*/}

            <Tab.Navigator
                screenOptions={{
                    tabBarScrollEnabled: true,
                    tabBarIndicatorStyle: {
                        backgroundColor: "blue",
                        height: "100%",
                    },
                    tabBarLabelStyle: { fontSize: 12, },
                    tabBarStyle: { backgroundColor: "white", width: 350, height: 100, marginLeft: 10, marginRight: 10, alignContent: 'center' },
                }}
                sceneContainerStyle={{ backgroundColor: "white", width: 100, height: 100, flex: 1 }}
            >
                <Tab.Screen name='Overview' component={OverviewFunction} />
                <Tab.Screen name='Reviews' component={ReviewsFunction} />
                <Tab.Screen name='Location' component={LocationFunction} />
            </Tab.Navigator>

            {/*Up untill here */}
            <TouchableOpacity style={styles.button}>
                <Text>
                    Reserve now
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
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
    }
});