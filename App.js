import { PageOfStation } from "./pages/station/pageOfStation";
import { Tabs } from "./pages/tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

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
            </AppStack.Navigator>
        </NavigationContainer>
    );
}