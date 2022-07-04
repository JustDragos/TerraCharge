import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View, Text, Button } from 'react-native';
import MapView from 'react-native-maps';
import * as React from 'react';
import {mapStyleDark} from './maps/map_style'; // this gets the design of the map; the style
import { Marker } from 'react-native-maps';

import {Animated} from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

export default function App() {
  var typeOfMapForDesign = mapStyleDark;
  

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        // comple with locations of the map  and the style
        // the style is from the variable in maps, in maps_style.js
        customMapStyle = {typeOfMapForDesign} 

        showsUserLocation={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: 46.77442468134578,
          longitude:  23.615560843529316,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 46.77164492183006,
            longitude: 23.625553844482933,
          }} 
          image = {require('../eCharge/assets/markers/map_marker_green.png')}
          />
        <Marker
          coordinate={{
            latitude: 46.77325416741861, 
            longitude: 23.625092504549855,
          }} 
          image = {require('../eCharge/assets/markers/map_marker_green.png')}
          />
         <Marker
          coordinate={{
            latitude: 46.77142447348493,  
            longitude: 23.621165750701667,
          }} 
          image = {require('../eCharge/assets/markers/map_marker_green.png')}
          />
       
       
      </MapView>

      <StatusBar style="auto" />
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
 
});
