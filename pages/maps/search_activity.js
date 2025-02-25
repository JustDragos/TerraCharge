import { useState } from "react";
import { Image, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, StyleSheet, Keyboard, TextInput, Text, View, TouchableOpacity } from "react-native";
import { texts, containers, views, buttons, images } from "./styles";
import { AirbnbRating } from "react-native-ratings";


function searchStreet(input, dataSource) {
    return input.filter(
        (listItem) =>
            listItem.shortAddress
                .toLowerCase()
                .includes(dataSource.toLowerCase()) /*||
          listItem.song.toLowerCase().includes(this.state.search.toLowerCase()),*/
    );

}

export function SearchBarActivity({ route, navigation }) {
    const { arr } = route.params;
    var filteredList = arr;
    const [dataSource, setDataSource] = useState("");
    // the thing above is here so that you know the text of the search bar
    return (
        <KeyboardAvoidingView
            style={[containers.containerBasic, {backgroundColor: '#f7f7f7'}]}
            behavior="padding"
            enabled={false}>
            <View style={{ flexDirection: "row", marginTop: "8%"}}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={{height: 45, width: 45}}
                        source={require('../../assets/navigators/go_back.png')}
                    />
                </TouchableOpacity>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <TextInput
                        style={[views.styleOfSearchBar, { marginTop: "0%", backgroundColor: 'white',borderBottomLeftRadius: 50, borderTopLeftRadius: 50, borderWidth: 1}]}
                        value={dataSource}
                        placeholder={"Search"}
                        placeholderTextColor={'#666'}
                        onChangeText={(input) => {
                            setDataSource(input);
                        }}
                    />

                </TouchableWithoutFeedback>
                <TouchableOpacity
                    style={[buttons.littleButton, { alignSelf: 'center', marginTop: "0%", height: 45, borderBottomLeftRadius: 0, borderTopLeftRadius: 0, borderWidth: 1 }]}
                    onPress={() => setDataSource("")}
                >
                    <Text style={{ color: 'white' }}>Clear</Text>

                </TouchableOpacity>

            </View>
            <ScrollView>
                {searchStreet(filteredList, dataSource).map((marker, index) => (
                    <View key={`${index}`} style={[views.eachListElement, {backgroundColor: '#f7f7f7'}]}>
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                style={images.styleOfIcon}
                                source={marker.icon}
                            />
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{marker.shortAddress}</Text>
                                <AirbnbRating
                                    defaultRating={marker.rating}
                                    selectedColor='#95D2FF'
                                    isDisabled={true}
                                    size={20}
                                    showRating={false}
                                />
                                <Text>{marker.getTextOfStationsLeft()}</Text>
                                <Text style={marker.status == 1 ? texts.greenText : texts.redText}>
                                    {marker.status == 1 ? "Open" : "Closed"}
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={buttons.buttonOfVectorForward}
                                onPress={() => navigation.navigate('PageOfStation', { station: marker })}
                            >

                                <Image
                                    style={images.styleOfVectorForward}
                                    source={require('../../assets/navigators/go_forward.png')}
                                />

                            </TouchableOpacity>
                        </View>
                    </View>

                ))}
            </ScrollView>
        </KeyboardAvoidingView>

    );

}