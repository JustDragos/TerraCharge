import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView from 'react-native-maps';
import * as React from 'react';
import { mapStyleDark } from './map_style'; // this gets the design of the map; the style
import { Marker } from 'react-native-maps'; // this is from the normal map
import { StationsClass } from '../../domain/markers'
import { Arduino } from '../../arduino/arduino_set_up';
import BottomSheet from 'react-native-simple-bottom-sheet';
import { ScrollView } from 'react-native';
import { Portal } from '@gorhom/portal';

function getStations(arr) {
  // put the markers in the corresponding array
  icon = ""
  arr.push(new StationsClass(46.77164492183006, 23.625553844482933, "lol0", icon));
  arr.push(new StationsClass(46.77325416741861, 23.625092504549855, "lol1", icon));
  arr.push(new StationsClass(46.77142447348493, 23.621165750701667, "lol2", icon));
  arr.push(new StationsClass(46.77142447348493, 23.621165750701667, "lol2", icon));
  arr.push(new StationsClass(46.77142447348493, 23.621165750701667, "lol2", icon));
  arr.push(new StationsClass(46.77142447348493, 23.621165750701667, "lol2", icon));
  arr.push(new StationsClass(46.77142447348493, 23.621165750701667, "lol2", icon));


  arr[0].index = 0
  arr[1].index = 1
  arr[2].index = 2

}

function closeBottomSheet(ref) {
  ref.current.togglePanel()

}

export function Maps({ navigation }) {
  // this is the style of the map
  const sheetRef = React.useRef(null);
  var stationsArray = new Array();
  getStations(stationsArray);
  // the thing above is so that it can be recognized when you want to switch to this file
  // ex: from the login screen you need this name
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        // comple with locations of the map  and the style
        // the style is from the variable in maps, in maps_style.js

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
        {stationsArray.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,

            }}
            image={(require('../../assets/markers/map_marker_green.png'))}
            onPress={() => closeBottomSheet(sheetRef)}
          />

        ))}

      </MapView>
      <Portal hostName="bottomSheetPortal">
      <View >
        <BottomSheet isOpen={false}
          sliderMaxHeight={400}
          sliderMinHeight={0}
          ref={sheetRef}
        >
          {(onScrollEndDrag) => (
            <ScrollView onScrollEndDrag={onScrollEndDrag}>
              {stationsArray.map((_, index) => (
                <View key={`${index}`} style={styles.eachListElement}

                >
                  <Text>{stationsArray[index].address}</Text>
                  <TouchableOpacity style={styles.button}>

                  </TouchableOpacity>

                </View>
              ))}
            </ScrollView>
          )}
        </BottomSheet>
        </View>
        </Portal>
      <StatusBar style="auto" />
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: 'relative',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // goes with the general background of app; not really used here
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginBottom: 150,
    position: 'relative'
    
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

  eachListElement: {
    minHeight: 200,
    width: 350,
    marginLeft: 10,
    marginBottom: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  


});
