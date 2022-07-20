import { Dimensions, StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Maps} from './maps/maps'
import { Arduino } from './arduino/arduino_set_up';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{ headerShown: false }}
      >
        {/*in this area all the activities should be initialized for the navigation to work, i don't
        think the order of these screens matter */}
        <Stack.Screen name = "Maps" component={Maps} options={{gestureEnabled: false}} />
        
        <Stack.Screen name="Arduino" component={Arduino} options={{ gestureEnabled: false}} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  
});
