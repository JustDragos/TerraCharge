import { PageOfStation } from "./pages/station/page_of_station";
import { Tabs } from "./pages/tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { LoadSearchBar } from "./pages/maps/search";

export default function App() {
    const AppStack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <AppStack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <AppStack.Screen name="Tabs" component={Tabs} />
                <AppStack.Screen name="PageOfStation" component={PageOfStation} />
                <AppStack.Screen name="Search" component={LoadSearchBar}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}