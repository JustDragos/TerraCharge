import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, Image, Pressable, TouchableOpacity } from 'react-native';
import { getReservations } from '../../database/databaseHandler';

function getReservationsOfUser(emailOfUser) {
    // in here you get the reservations from each user
    const [reservations, setReservations] = useState(null);
    var componentIsMounted = false;
    useEffect(() => {
        if (componentIsMounted == false)
            {(async () => {

                var newReservations = await getReservations(emailOfUser);
                setReservations(newReservations);



            })();
            componentIsMounted = true;
        }
    },[componentIsMounted]);

    return reservations;
}

export function PaymentHistory({ navigation, route }) {
    var user = route.params.user;

    var reservations = getReservationsOfUser(user.email);
    // you can say something like reservations[0].date , as it works like a normal
    // object
    console.log(reservations);
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
        paddingBottom: 20
    },
    backIcon: {
        resizeMode: 'center',
        width: 60,
        height: 60
    },

})