import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Maps } from './pages/maps/maps';
// Plus...
import plus from './assets/plus.png'
import { SafeAreaView } from 'react-native-safe-area-context';
// Font Awesome Icons...
import { FontAwesome5 } from '@expo/vector-icons'
import { useRef } from 'react';
import { PortalProvider, PortalHost } from '@gorhom/portal';

const Tab = createBottomTabNavigator();

// Hiding Tab Names...
export default function App() {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (

    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <PortalProvider>
        <NavigationContainer>
          <Tab.Navigator

            screenOptions={{
              // Floating Tab Bar...
              headerShown: false,
              tabBarStyle: {
                backgroundColor: '#95D2FF',
                position: 'absolute',

                bottom: 0,
                flex: 1,
                marginHorizontal: 0,
                // Max Height...
                height: 75,
                headerShown: false,
                borderTopRightRadius: 28,
                borderTopLeftRadius: 28,
                // Shadow...
                shadowColor: '#000',
                shadowOpacity: 0.02,
                shadowOffset: {
                  width: 10,
                  height: 10
                },
                paddingHorizontal: 20,
              }
            }}>

            {
              // Tab Screens....

              // Tab ICons....
            }

            <Tab.Screen name={"Home"} component={Maps} options={{
              tabBarLabel: () => { return null },
              tabBarIcon: ({ focused }) => (
                <View style={{
                  // centring Tab Button...
                  position: 'absolute',
                  top: 28
                }}>
                  <FontAwesome5
                    name="map"
                    size={25}
                    color={focused ? 'white' : 'white'}
                  ></FontAwesome5>
                </View>
              )
            }} listeners={({ navigation, route }) => ({
              // Onpress Update....
              tabPress: e => {
                Animated.spring(tabOffsetValue, {
                  toValue: 0,
                  useNativeDriver: true
                }).start();
              }
            })}></Tab.Screen>

            <Tab.Screen name={"Search"} component={SearchScreen} options={{
              tabBarLabel: () => { return null },
              tabBarIcon: ({ focused }) => (
                <View style={{
                  // centring Tab Button...
                  position: 'absolute',
                  top: 28
                }}>
                  <FontAwesome5
                    name="exclamation-circle"
                    size={25}
                    color={focused ? 'white' : 'white'}
                  ></FontAwesome5>
                </View>
              )
            }} listeners={({ navigation, route }) => ({
              // Onpress Update....
              tabPress: e => {
                Animated.spring(tabOffsetValue, {
                  toValue: getWidth() + 23,
                  useNativeDriver: true
                }).start();
              }
            })}></Tab.Screen>

            <Tab.Screen name={"Notifications"} component={NotificationScreen} options={{
              tabBarLabel: () => { return null },
              tabBarIcon: ({ focused }) => (
                <View style={{
                  // centring Tab Button...
                  position: 'absolute',
                  top: 28
                }}>
                  <FontAwesome5
                    name="chart-bar"
                    size={25}
                    color={focused ? 'white' : 'white'}
                  ></FontAwesome5>
                </View>
              )
            }} listeners={({ navigation, route }) => ({
              // Onpress Update....
              tabPress: e => {
                Animated.spring(tabOffsetValue, {
                  toValue: getWidth() + 113,
                  useNativeDriver: true
                }).start();
              }
            })}></Tab.Screen>

            <Tab.Screen name={"Settings"} component={SettingsScreen} options={{
              tabBarLabel: () => { return null },
              tabBarIcon: ({ focused }) => (
                <View style={{
                  // centring Tab Button...
                  position: 'absolute',
                  top: 28
                }}>
                  <FontAwesome5
                    name="user-alt"
                    size={25}
                    color={focused ? 'white' : 'white'}
                  ></FontAwesome5>
                </View>
              )
            }} listeners={({ navigation, route }) => ({
              // Onpress Update....
              tabPress: e => {
                Animated.spring(tabOffsetValue, {
                  toValue: getWidth() + 200,
                  useNativeDriver: true
                }).start();
              }
            })}></Tab.Screen>

          </Tab.Navigator>

          <Animated.View style={{
            opacity: 0.5,
            width: 7.5,
            height: 7.5,
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 61,
            // Horizontal Padding = 20...
            left: 62,
            borderRadius: 1000,
            transform: [
              { translateX: tabOffsetValue }
            ]
          }}>

          </Animated.View>
        </NavigationContainer>

        <PortalHost name="bottomSheetPortal" />

      </PortalProvider>
    </SafeAreaView>

  );
}

function getWidth() {
  let width = Dimensions.get("window").width

  // Horizontal Padding = 20...
  width = width - 80

  // Total five Tabs...
  return width / 5
}

function EmptyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Aici trebuie sa apara profile!</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Aici trebuie sa apara harta!</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Aici trebuie sa apara stats</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Aici trebuie sa apara info(tips'ntricks)!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SafeAreaViewContainer:
  {
    flex: 1,

    // height:"100%",
    // width: "100%",
  }
});
