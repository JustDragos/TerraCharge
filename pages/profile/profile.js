import { Text, View, StyleSheet, Button, Image, Pressable} from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';

export function Profiles() {
    return(
        <View style = {styles.mainCointainer}>
            <View style = {styles.firstContainer}>
                <View>
                    <Pressable>
                        <Image source = {require('../../assets/navigators/go_back.png')}/>
                    </Pressable>
                </View>
                <View>
                    <Image source={require('../../assets/logo/dpitLogo.png')}/>
                </View>
            </View>
            <View style = {styles.secoundContainer}>
                <View>

                </View>
                <View style = {{flexDirection: 'column'}}>
                    <Text>Welcome</Text>
                    <Text>Mister David</Text>
                </View>
                <View></View>
            </View>
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
    },
    secoundContainer: {
        flexDirection: 'row',
        borderBottomColor: '#989898',
        borderTopColor: '#989898'
    }
})

function onPress(){
    
}