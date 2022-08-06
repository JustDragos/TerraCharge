
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import { TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native';
import { buttons, texts, views } from './styles';
export function LoadSearchBar(navigation, stationsArray) {
    
    return (
       
        <View style={{ position: 'absolute', top: 10, left: 10, width: '100%', width: 100, height: 100, marginTop: 10 }}

        >
            <TouchableOpacity
                style={[views.styleOfSearchBar, {width: 150, marginTop: 10} ]}
                onPress={() => navigation.navigate('SearchBarActivity', {itemId: 86, arr: stationsArray})}
            >
                <Text> Search location... </Text>
            </TouchableOpacity>
        </View >
        
    );

}
