// import { PageOfStation } from "./pages/station/pageOfStation";
// import { Tabs } from "./pages/tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// import { SearchBarActivity } from "./pages/maps/search_activity";
import { SignUp } from './sign_up/sign_up';
import { SignIn } from './sign_up/sign_in';
import { GetStarted } from './sign_up/get_started';

export default function App() {
    const AppStack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <AppStack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >   
                <AppStack.Screen name="GetStarted" component={GetStarted}/>
                <AppStack.Screen name="SignIn" component={SignIn}/>
                <AppStack.Screen name="SignUp" component={SignUp}/>
                {/* <AppStack.Screen name="Tabs" component={Tabs} /> */}
                {/* <AppStack.Screen name="PageOfStation" component={PageOfStation} /> */}
                {/* <AppStack.Screen name="SearchBarActivity" component={SearchBarActivity}/> */}
            </AppStack.Navigator>
        </NavigationContainer>
    );
}