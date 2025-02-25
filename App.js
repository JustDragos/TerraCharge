import { PageOfStation } from "./pages/station/pageOfStation";
import { Tabs } from "./pages/tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SearchBarActivity } from "./pages/maps/search_activity";
import { GetStarted } from "./pages/sign_up/get_started";
import { SignUp } from "./pages/sign_up/sign_up";
import { SignIn } from "./pages/sign_up/sign_in";
import { Reservation } from "./pages/station/reservationPage";
import { DatabaseHandler } from "./database/databaseHandler";
import {PaymentHistory} from "./pages/profile/paymentHistory";
import {PaymentMethod} from "./pages/profile/paymentMethod";
import {WebSite} from "./pages/profile/website";
import {Settings} from "./pages/profile/settings";
import { AddCard } from "./pages/profile/addCard";
import {BatteryHealth} from "./pages/tipsAndTricks/batteryHealth";

export default function App() {
    const AppStack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <AppStack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <AppStack.Screen name="GetStarted" component={GetStarted} />
                <AppStack.Screen name="SignUp" component={SignUp} />
                <AppStack.Screen name="SignIn" component={SignIn} />
                <AppStack.Screen name="Tabs" component={Tabs} />
                <AppStack.Screen name="PageOfStation" component={PageOfStation} />
                <AppStack.Screen name="SearchBarActivity" component={SearchBarActivity} />
                <AppStack.Screen name="ReservationActivity" component={Reservation}/>
                <AppStack.Screen name="DatabaseHandlerActivity" component={DatabaseHandler}/>
                <AppStack.Screen name="PaymentHistory" component={PaymentHistory}/>
                <AppStack.Screen name="PaymentMethod" component={PaymentMethod}/>
                <AppStack.Screen name="WebSite" component={WebSite}/>
                <AppStack.Screen name="SettingsTab" component={Settings}/>
                <AppStack.Screen name="BatteryHealth" component={BatteryHealth}/>
                <AppStack.Screen name="AddCard" component={AddCard}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}