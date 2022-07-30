import React from 'react';
import { Image,Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export function PageOfStation({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}
                style={styles.button}
            >
                <Image
                    style={styles.tinyLogo}
                    source={require('../../assets/fi_chevron-left.png')}
                />
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
});