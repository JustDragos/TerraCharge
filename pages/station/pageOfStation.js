import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export function PageOfStation({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Hello, world!</Text>
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