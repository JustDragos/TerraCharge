import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';



export function PageOfStation({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}
                style={styles.button}
            >
                <Text style={styles.text}>
                    Go back
                </Text>
            </TouchableOpacity>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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

    },
    text: {
        color: "white",
        fontWeight: "600",
      },
});