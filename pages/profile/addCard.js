import { Text, View, StyleSheet, Button, Image, Pressable, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export function AddCard({ navigation }) {
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
            <View style={{ justifyContent: 'center', alignContent: 'center'}}>
                <View style={{ justifyContent: 'center', paddingLeft: 40 }}>
                    <Image source={require('../../assets/card.png')} style={{ width: 250, height: 150, resizeMode: 'center' }} />
                </View>
                <View style = {{justifyContent: 'space-around', height: 200}}>
                    <View>
                        <Text>Card Number</Text>
                        <TextInput placeholder='1234 5678 9876 5432' style={styles.cardNumber} />
                    </View>
                    <View style = {{flexDirection: 'row'}}>
                        <View style = {{flex: 6}}>
                            <Text>Expiration date</Text>
                            <TextInput placeholder='12 / 99' style={styles.cardNumber} />
                        </View>
                        <View style = {{flex: 1}}/>
                        <View style = {{flex: 6}}>
                            <Text>CVV</Text>
                            <TextInput placeholder='xxx' style={styles.cardNumber} />
                        </View>
                    </View>
                    <View>
                        <Text>Card holder's name</Text>
                        <TextInput placeholder='Jacob Howell' style={styles.cardNumber} />
                    </View>
                </View>
            </View>
            <View style = {{ paddingLeft: 100, paddingTop: 30}}>
                <TouchableOpacity>
                    <View style = {{backgroundColor: '#516CC1' , width: 130, height: 30, justifyContent: 'center', paddingLeft: 30,  borderRadius: 10}}>
                        <Text style = {{color: '#fff', fontSize: 23}}>Confirm</Text>
                    </View>
                </TouchableOpacity>
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
    cardNumber: {
        borderWidth: 1,
        padding: 7
    }
})