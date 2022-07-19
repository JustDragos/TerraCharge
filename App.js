import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View, TouchableOpacity, Text, SliderComponent } from 'react-native';
import MapView from 'react-native-maps';
import * as React from 'react';
import { mapStyleDark } from './maps/map_style'; // this gets the design of the map; the style
import { Marker } from 'react-native-maps'; // this is from the normal map
import BottomSheet from "react-native-gesture-bottom-sheet"; // this is for the swipe up list
import { SafeAreaView } from 'react-native-safe-area-context';
import { MarkerClass } from './entities/markers';


function getMarkers(arr) {
  // put the markers in the corresponding array
  var icon = './assets/markers/map_marker_green.png';
  arr.push(new MarkerClass(46.77164492183006, 23.625553844482933, "lol0", icon));
  arr.push(new MarkerClass(46.77325416741861, 23.625092504549855, "lol1", icon));
  arr.push(new MarkerClass(46.77142447348493, 23.621165750701667, "lol2", icon));
}

function renderBottomSheet(sheetRef) {
  
  return (
    <SafeAreaView>
      <BottomSheet
        hasDraggableIcon
        ref={sheetRef}
        height={450}
      >
        {sheetRef.current.show()}

      </BottomSheet>
    </SafeAreaView>
  );
}



export default function App() {
  // this is the style of the map
  var typeOfMapForDesign = mapStyleDark;
  const sheetRef = React.useRef(null);
  var markersArray = new Array();
  getMarkers(markersArray);

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
        {markersArray.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,

            }}
            image={(require('./assets/markers/map_marker_green.png'))}
            onPress = {() => renderBottomSheet(sheetRef)}
          />

        ))}

      </MapView>
      <SafeAreaView style={styles.container}>
        <BottomSheet hasDraggableIcon ref={sheetRef} height={600} />
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
    marginBottom: 50,
    marginRight: 50,
    alignSelf: "flex-end",
    borderRadius: 20,
    shadowColor: "#8559da",
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    flexDirection: "row",
    shadowRadius: 5,
    elevation: 6,
  },

  // 

});
