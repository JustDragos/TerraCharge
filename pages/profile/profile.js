import { Text, View, StyleSheet, Button, Image, Pressable} from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';

export function Profiles() {
    return(
        <View style = {styles.mainCointainer}>
            <View style = {styles.firstContainer}>
                <View>
                    <Pressable>
                        <Image source = {require('../../assets/navigators/go_back.png')} style = {styles.backIcon}/>
                    </Pressable>
                </View>
                <View style = {{paddingLeft: 200}}>
                    <Image source = {require('../../assets/logo/dpitLogo.png')} style = {styles.backIcon}/>
                </View>
            </View>
            <View style = {styles.secoundContainer}>
                <View style = {{flex: 1, paddingRight: 30}}>
                    <Image source = {require('../../assets/emote.png')} style = {{width: 100, height: 100}}/>
                </View>
                <View style = {{flexDirection: 'column', flex: 2, justifyContent: 'center'}}>
                    <View style = {{paddingBottom: 6}}>
                        <Text style = {{color: '#828282', fontSize: 20}}>Welcome</Text>
                    </View>
                    <View>
                        <Text style = {{color: '#000000', fontSize: 20, fontWeight: '600'}}>Mister David</Text>
                    </View>
                </View>
                <View style = {{flex: 1, justifyContent: 'center'}}>
                    <Image source = {require('../../assets/fi_log-out.png')} style = {{width: 40, height: 40}}/>
                </View>
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
        backgroundColor: '#fff',
        paddingLeft: 30,
        paddingRight: 30
    },
    firstContainer: {
        flexDirection: 'row',
        paddingBottom: 7
    },
    secoundContainer: {
        flexDirection: 'row',
        borderBottomColor: '#828282',
        borderBottomWidth: 1,
        borderTopColor: '#828282',
        borderTopWidth: 1,
        paddingLeft: 15
    },
    backIcon: {
        resizeMode: 'center',
        width: 60,
        height: 60
    }
})

function onPress(){
    
}