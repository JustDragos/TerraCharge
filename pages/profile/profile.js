import { Text, View, StyleSheet, Button, Image, Pressable} from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';

export function Profiles() {
    return(
        <View style = {styles.mainCointainer}>
            <View style = {styles.firstContainer}>
                <View>
                    <Pressable>

                    </Pressable>
                </View>
                <View>
                    <Image source={require('../../assets/logo/dpitLogo.png')}/>
                </View>
            </View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainCointainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#fff'
    },
    firstContainer: {
        flexDirection: 'row'
    }
})

function onPress(){
    
}