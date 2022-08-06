import { useState } from "react";
import { Image, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, StyleSheet, Keyboard, TextInput, Text, View, TouchableOpacity } from "react-native";
import { containers, views, buttons } from "./styles";


function searchStreet(input, dataSource) {
    return input.filter(
        (listItem) =>
            listItem.address
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
            style={containers.containerBasic}
            behavior="padding"
            enabled={false}>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/fi_chevron-left.png')}
                    />
                </TouchableOpacity>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <TextInput
                        style={views.styleOfSearchBar}
                        value={dataSource}
                        placeholder={"Search"}
                        placeholderTextColor={'#666'}
                        onChangeText={(input) => {
                            setDataSource(input);
                        }}
                    />

                </TouchableWithoutFeedback>
                <TouchableOpacity
                    style={buttons.littleButton}
                    onPress={() => setDataSource("")}
                >
                    <Text>Clear</Text>

                </TouchableOpacity>

            </View>
            <ScrollView>
                {searchStreet(filteredList, dataSource).map((marker, index) => (
                    <View key={`${index}`} style={styles.eachListElement}>
                        <Text>{marker.address}</Text>

                    </View>

                ))}
            </ScrollView>
        </KeyboardAvoidingView>

    );

}

const styles = StyleSheet.create({


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

});