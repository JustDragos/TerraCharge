import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import MapView from 'react-native-maps';
import React, { useEffect, useState } from 'react';
import { Marker } from 'react-native-maps'; // this is from the normal map
import { StationsClass } from '../../domain/markers'
import BottomSheet from 'react-native-simple-bottom-sheet';
import { ScrollView } from 'react-native';
import { Portal } from '@gorhom/portal';
import { LoadSearchBar } from './search_bar';
import * as Location from 'expo-location';


function distanceBetweenTwoPoints(lat1, lon1, lat2, lon2) {
  // haversine fomula
  const R = 6371e3; // metres
  const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // in metres

  return (d / 1000).toFixed(1);
}
function sortingFunction(a, b) {
  return a.distanceFromUser - b.distanceFromUser;
}
function getStations(arr, latitude, longitude) {
  // put the markers in the corresponding array
  icon = '../../assets/markers/map_marker_green.png';
  arr.push(new StationsClass(46.77164492183006, 23.625553844482933, "Strada Alexandru Vaida Voevod", icon));
  arr.push(new StationsClass(46.77325416741861, 23.625092504549855, "Lacul Gheorgheni", icon));
  arr.push(new StationsClass(46.77142447348493, 23.621165750701667, "Aleea Slănic", icon));
  arr.push(new StationsClass(46.76955626297273, 23.622691749305066, "Strada Alexandrescu", icon));
  arr[0].chargersLeft = 2;
  arr[0].chargersInTotal = 5;
  arr[0].hoursOpened = [8, 20];


  arr[1].chargersLeft = 1;
  arr[1].chargersInTotal = 10;
  arr[1].hoursOpened = [19, 22];


  arr[2].chargersLeft = 5;
  arr[2].chargersInTotal = 7;
  arr[2].hoursOpened = [17, 19];

  arr[3].chargersLeft = 5;
  arr[3].chargersInTotal = 7;
  arr[3].hoursOpened = [10, 19];

  for (let i = 0; i < arr.length; i++) {

    arr[i].status = arr[i].createStatus();
    arr[i].distanceFromUser = distanceBetweenTwoPoints(latitude, longitude, arr[i].latitude, arr[i].longitude);
  }
  arr.sort(sortingFunction);
  for (let i = 0; i < arr.length; i++) {
    arr[i].idInList = i;
  }

}
function operateBottomSheet(ref) {
  
  ref.current.togglePanel()
}
function getTextOfStationsLeft(arr, index) {
  return arr[index].chargersInTotal + " charges " + arr[index].chargersLeft + " left \n" + arr[index].distanceFromUser + " km away";
}
function getLocationFromUser() {
  var [longitude, setLongitude] = useState(0);
  var [latitude, setLatitude] = useState(0);
  try {
    // at useEffect there is a lambda
    useEffect(() => {
      (async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status === "denied" || status === "undetermined") {
          alert('Permission to access location was denied, using default location');
          throw error;
        }
        else {
          let newLocation = await Location.getCurrentPositionAsync({});
          setLongitude(newLocation.coords.longitude);
          setLatitude(newLocation.coords.latitude);
        }
      })();
    }, [latitude, longitude]);

  }
  catch (error) {
    setLongitude(23.615560843529316);
    setLatitude(46.77442468134578);
    console.log(error);
  }
  return [latitude, longitude];
}
function renderFirstItem(index, stationsArray, shouldBeFirst) {
  if (shouldBeFirst == 0)
    return styles.eachListElement;
  if (stationsArray[index].status == 1)
    return [styles.eachListElement, { backgroundColor: 'lightgreen' }];
  return [styles.eachListElement, { backgroundColor: 'lightcoral' }];
}


export function Maps({ navigation }) {
  // this is the style of the map
  const sheetRef = React.useRef(null);
  const [indexOfStation, setIndexOfStation] = useState(0);
  // below are the coordinates used for calculating the distances between each station and the user
  var coordinates = getLocationFromUser();
  var latitude = coordinates[0];
  var longitude = coordinates[1];

  var stationsArray = new Array();
  getStations(stationsArray, latitude, longitude);
  // the thing above is so that it can be recognized when you want to switch to this file
  // ex: from the login screen you need this name

  var red_icon = '../../assets/markers/map_marker.png';
  var green_icon = '../../assets/markers/map_marker_green.png';


  // this either gets location from user or the default one, currently only being used for calculating distances
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
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,

            }}
            key={index}
            onPress={() => {operateBottomSheet(sheetRef), setIndexOfStation(index)}}
            icon={marker.status == 1 ? require(green_icon) : require(red_icon)}
          >
          </Marker>

        ))}

      </MapView>
      {LoadSearchBar(navigation, stationsArray)}
      <Portal hostName="bottomSheetPortal">
        <View >
          <BottomSheet isOpen={false}
            sliderMaxHeight={400}
            sliderMinHeight={0}
            ref={sheetRef}
          >
            {(onScrollEndDrag) => (
              <ScrollView onScrollEndDrag={onScrollEndDrag}
              >
                <View style={renderFirstItem(indexOfStation, stationsArray, 1)}>
                  <Image
                    style={styles.photo}
                    source={require('../../assets/battery1.png')}
                  />
                  <Text>{stationsArray[indexOfStation].address}</Text>
                  <Text>{getTextOfStationsLeft(stationsArray, indexOfStation)}</Text>
                  <TouchableOpacity style={styles.tinyLogo}
                    onPress={() => navigation.navigate('PageOfStation')}
                  >
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/fi_chevron-left.png')}
                    />
                  </TouchableOpacity>
                </View>
                {stationsArray.map((_, index) => (
                  <View key={`${index}`} style={renderFirstItem(index, stationsArray, 0)}

                  >
                    <Image
                      style={styles.photo}
                      source={require('../../assets/battery1.png')}
                    />
                    <Text>{stationsArray[index].address}</Text>
                    <Text>{getTextOfStationsLeft(stationsArray, index)}</Text>
                    <TouchableOpacity style={styles.tinyLogo}
                      onPress={() => navigation.navigate('PageOfStation')}
                    >
                      <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/fi_chevron-left.png')}
                      />
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
    marginRight: 10,
    marginBottom: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  tinyLogo: {
    width: 100,
    flex: 1,
    height: 50,
    marginRight: "10%",
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  photo: {
    width: 66,
    height: 58,
    alignSelf: 'flex-start',
  },


});
