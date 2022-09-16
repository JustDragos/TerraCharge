import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { openLocker } from '../../database/databaseHandler';


// deleted functions(){
//    // const [status, setStatus] = useState(false);
    // var componentIsMounted = false;
    // useEffect(() => {
        
    //     if (componentIsMounted == false) {
    //         (async () => {

    //             var newStatus = await getAsyncLockerStatus();
    //             setStatus(newStatus.status);
    //             console.log(newStatus.status);
    //             // var newReservations = await getAsyncLockerStatus();

    //         })().catch((E) => { console.log(E) });
    //         componentIsMounted = true;
    //     }
    // }, [componentIsMounted]);
//}

export function Settings({ navigation }) {
    
   
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
                    openLocker();
                    

                }}
            >
                <Text style={{
                    color: 'black',
                    fontWeight: "600", fontSize: 20
                }}>
                    Open the locker!
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