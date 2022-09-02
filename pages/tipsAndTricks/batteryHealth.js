import { Text, View, StyleSheet, Button, Image, Pressable, TouchableOpacity} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { WebView } from 'react-native-webview';


function MainSite() {
    return(
        <View style = {{flex: 1}}>
            <WebView source = {{ uri : 'https://myrepublic.net/sg/blog/10-ways-to-make-your-phone-battery-last-longer/'}}/>
        </View>
    )
}
function AppleSite() {
    return(
        <View style = {{flex: 1}}>
            <WebView source = {{ uri : 'https://www.apple.com/batteries/maximizing-performance/'}}/>
        </View>
    )
}
function AndroidSite() {
    return(
        <View style = {{flex: 1}}>
            <WebView source = {{ uri : 'https://support.google.com/android/answer/7664692?hl=en'}}/>
        </View>
    )
}

function generateTopTab(Tab) {
    return (
        <View style={{ height: "100%" }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarScrollEnabled: true,
                    tabBarIndicatorStyle: {
                        backgroundColor: "#95D2FF",
                        height: 30,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignContent: 'center',
                    },
                    tabBarLabelStyle: {fontColor:'#fff', fontSize: 16, textTransform: 'none', alignContent: 'center' , paddingBottom: 10},
                    tabBarStyle: {
                        height: 30,
                        width: "90%",

                        justifyContent: 'center',
                        backgroundColor: '#f1f1f1',
                        marginBottom: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        borderRadius: 10,
                    },

                }}
                sceneContainerStyle={{ width: "50%" }}
            >
                <Tab.Screen name='MyRepublic' component={MainSite} />
                <Tab.Screen name='Apple' component={AppleSite} />
                <Tab.Screen name='Android Help' component={AndroidSite} />
            </Tab.Navigator>
        </View>
    );
}

export function BatteryHealth({navigation}) {
    const Tab = createMaterialTopTabNavigator();
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
            <View style = {styles.secoundContainer}>
                <Text style = {styles.text}>Bellow, you can browse through different websites that give you advices about how to make your phone battery health last longer</Text>
            </View>
            <View style = {{paddingTop: 20}}>
                {generateTopTab(Tab)}
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
        paddingHorizontal: 30,
        paddingBottom: 80,
        paddingTop: 50
    },
    firstContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 20,
    },
    secoundContainer : {
        paddingTop: 10
    },
    backIcon: {
        resizeMode: 'center',
        width: 60,
        height: 60
    },
    text : {
        fontSize: 17,
        letterSpacing: 1
    }
})