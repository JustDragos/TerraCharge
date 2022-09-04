import { Text, View, StyleSheet, Button, Image, Pressable, TouchableOpacity } from 'react-native';
import { changeStatusOfLocker } from '../../database/databaseHandler';
import { useState, useEffect } from 'react';
function changeStatusInSync(newStatus) {
    (async () => {
        await changeStatusOfLocker(newStatus);
    })();
}
export function Settings({ navigation }) {
    const [status, setStatus] = useState(false);
    var componentIsMounted = false;
    useEffect(() => {
        if (componentIsMounted == false) {
            (async () => {

                var newReservations = await g(emailOfUser);
                setReservations(newReservations);



            })();
            componentIsMounted = true;
        }
    }, [componentIsMounted]);
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
            <TouchableOpacity
                style={{ width: 100, height: 100, borderWidth: 4, alignSelf: 'center' }}
                onPress={() => { setStatus(!status); changeStatusInSync(status) }}
            />
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