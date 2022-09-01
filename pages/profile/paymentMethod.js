import { Text, View, StyleSheet, Button, Image, Pressable, TouchableOpacity } from 'react-native';

export function PaymentMethod({ navigation }) {
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
            <View style={styles.secoundContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('AddCard')}>
                    <View style={styles.add}>

                        <View>
                            <Image source={require('../../assets//add.png')} style={styles.backIcon} />
                        </View>
                        <View style = {{justifyContent: 'center', paddingLeft: 30}}>
                            <Text style = {{fontSize: 17}}>Add debit or credit card</Text>
                        </View>

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
    secoundContainer: {
        paddingTop: 60,
    },
    backIcon: {
        resizeMode: 'center',
        width: 60,
        height: 60
    },
    add: {
        flexDirection: 'row',
        backgroundColor: '#BFFF93',
        alignContent: 'center',
        borderRadius: 20,
        shadowColor: "#8559da",
        shadowOpacity: 0.7,
        shadowOffset: {
          height: 4,
          width: 4,
        },
    }
})