import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import MapView from 'react-native-maps';
import * as React from 'react';
import { mapStyleDark } from './maps/map_style'; // this gets the design of the map; the style
import { Marker } from 'react-native-maps';

import BottomSheet from "react-native-gesture-bottom-sheet";
import { SafeAreaView } from 'react-native-safe-area-context';
import {MarkerClass} from './entities/markers';
export default function App() {
  // this is the style of the map
  var typeOfMapForDesign = mapStyleDark;
  
  
  // this is the content of the swipe up bottom sheet
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,

      }}

    >
    </View>
  );
  // this is for the head of the swipe up bottom sheet
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
  const sheetRef = React.useRef(null);
  // ends here
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        // comple with locations of the map  and the style
        // the style is from the variable in maps, in maps_style.js
        customMapStyle={typeOfMapForDesign}
        showsUserLocation={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: 46.77442468134578,
          longitude: 23.615560843529316,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        
        <Marker
          coordinate={{
            latitude: 46.77164492183006,
            longitude: 23.625553844482933,
          }}
          image={require('../eCharge/assets/markers/map_marker_green.png')}
        />
        <Marker
          coordinate={{
            latitude: 46.77325416741861,
            longitude: 23.625092504549855,
          }}
          image={require('../eCharge/assets/markers/map_marker_green.png')}
        />
        <Marker
          coordinate={{
            latitude: 46.77142447348493,
            longitude: 23.621165750701667,
          }}
          image={require('../eCharge/assets/markers/map_marker_green.png')}
        />

      </MapView>
      <SafeAreaView>
        <BottomSheet hasDraggableIcon ref={sheetRef} height={450}>
        </BottomSheet>
        <TouchableOpacity
          style={styles.button}
          onPress={() => sheetRef.current.show()}
        >
          <Text style={styles.text}>
            See stations
          </Text>
        </TouchableOpacity>
      </SafeAreaView>




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
  // goes with the general bacground of app; not really used here
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  // goes with the map
  text: {
    color: "white",
    fontWeight: "600",
  },
  button: {
    height: 50,
    width: 150,
    backgroundColor: "#140078",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#8559da",
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    elevation: 6,
  },

  // 

});

