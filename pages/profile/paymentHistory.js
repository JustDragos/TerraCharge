import { Text, View, StyleSheet, Button, Image, Pressable, TouchableOpacity} from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hyperlink from 'react-native-hyperlink';

export function PaymentHistory({navigation}) {
    return (
        <View style = {styles.mainCointainer}>
            <View style = {styles.firstContainer}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source = {require('../../assets/navigators/go_back.png')} style = {styles.backIcon}/>
                    </TouchableOpacity>
                </View>
                <View style = {{paddingLeft: 200}}>
                    <Image source = {require('../../assets/logo/dpitLogo.png')} style = {styles.backIcon}/>
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
        borderBottomWidth: 1,
        paddingBottom: 20
    },
    backIcon: {
        resizeMode: 'center',
        width: 60,
        height: 60
    },

})