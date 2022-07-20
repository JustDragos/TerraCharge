import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import MapView from 'react-native-maps';
import * as React from 'react';
import { mapStyleDark } from './map_style'; // this gets the design of the map; the style
import { Marker } from 'react-native-maps'; // this is from the normal map
import BottomSheet from "react-native-gesture-bottom-sheet"; // this is for the swipe up list
import { SafeAreaView } from 'react-native-safe-area-context';
import { MarkerClass } from '../domain/markers'
import { Arduino } from '../arduino/arduino_set_up';


function getMarkers(arr) {
  // put the markers in the corresponding array
  icon = ""
  arr.push(new MarkerClass(46.77164492183006, 23.625553844482933, "lol0", icon));
  arr.push(new MarkerClass(46.77325416741861, 23.625092504549855, "lol1", icon));
  arr.push(new MarkerClass(46.77142447348493, 23.621165750701667, "lol2", icon));
}

function renderBottomSheet(sheetRef) {
  // this uses the same bottom sheet from the see stations menu
  // if you modify that, you modify this
  // this happens because you use the same referrence === sheetRef
  // this is here just for when you press a marker, so that the list pops up, make all changes
  // in the one in see stations button
  return (
    <SafeAreaView>
      <BottomSheet
        hasDraggableIcon
        ref={sheetRef}
      >
        {sheetRef.current.show()}
      </BottomSheet>
    </SafeAreaView>
  );
}



export function Maps({ navigation }) {
  // this is the style of the map
  var typeOfMapForDesign = mapStyleDark;
  const sheetRef = React.useRef(null);
  var markersArray = new Array();
  getMarkers(markersArray);

  navigationOptions =
  {
     title: 'MapsActivity',
  };
  // the thing above is so that it can be recognized when you want to switch to this file
  // ex: from the login screen you need this name
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
        // latitude and longitude here are where the map starts
        // can be changed
        // the delta variables are constants, don't change
      >
        {markersArray.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,

            }}
            image={(require('../assets/markers/map_marker_green.png'))}
            onPress={() => renderBottomSheet(sheetRef)}
          />

        ))}

      </MapView>
      {/*the component below also renders the list from the markers  */}

      <SafeAreaView style={styles.container}>
        <BottomSheet hasDraggableIcon ref={sheetRef} height={600}>
          {/* in this area you add things like buttons, views etc */}
          <TouchableOpacity style={styles.button}
          onPress = {() => navigation.navigate(Arduino)}
          >
              <Text style = {styles.text}>
                Go to Arduino app
              </Text>
          </TouchableOpacity>

        </BottomSheet>


        {/*see the all stations button */}
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
