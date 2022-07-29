
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
export function LoadSearchBar() {
    return (
        <View style={{ position: 'absolute', top: 10, width: '100%', width: 100, height: 100 }}>
            <TextInput
                style={styles.styleOfSearchBar}
                placeholder={'Search'}
                placeholderTextColor={'#666'}
            />

        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    styleOfSearchBar: {
        borderRadius: 10,
        margin: 10,
        color: '#000',
        borderColor: '#666',
        backgroundColor: '#FFF',
        borderWidth: 1,
        height: 45,
        paddingHorizontal: 10,
        fontSize: 18,
    },
    styleOfSearchView: {
        position: 'absolute',
        top: 10,
        width: '100%'
    }
});