import { Text, View, StyleSheet, Button, Image, Pressable, TouchableOpacity } from 'react-native';
import { changeStatusOfLocker, getAsyncLockerStatus } from '../../database/databaseHandler';
import { useState, useEffect } from 'react';

export function Settings({ navigation }) {
    const [status, setStatus] = useState(false);
    var componentIsMounted = false;
    useEffect(() => {
        
        if (componentIsMounted == false) {
            (async () => {

                var newStatus = await getAsyncLockerStatus();
                setStatus(newStatus.status);
                console.log(newStatus.status);
                // var newReservations = await getAsyncLockerStatus();

            })().catch((E) => { console.log(E) });
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
                style={{ width: 100, height: 100, borderWidth: 1, alignSelf: 'center' }}
                onPress={() => {
                    
                    ((async() =>{
                        await changeStatusOfLocker(!status)
                        setStatus(!status);
                    
                    })()).catch((E) =>{console.log(E)});

                }}
            >
                <Text style={{
                    color: 'black',
                    fontWeight: "600", fontSize: 20
                }}>
                    {status.toString()}
                </Text>
            </TouchableOpacity>
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