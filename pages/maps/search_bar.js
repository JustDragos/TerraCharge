
import { View, TouchableOpacity, Text } from 'react-native';
import { views } from './styles';
import { Image } from 'react-native';
export function LoadSearchBar(navigation, stationsArray) {
    return (
        <View style={{ position: 'absolute', top: 10, left: 10, width: '100%', width: 100, height: 100, marginTop: 10 }}
        >
            <TouchableOpacity
                style={[views.styleOfSearchBar, { width: 200, marginTop: 10, flexDirection: "row", borderRadius: 50 }]}
                onPress={() => navigation.navigate('SearchBarActivity', { itemId: 86, arr: stationsArray })}
            >
                <Text
                    style={{ marginRight: 20,  }}
                > Search location... </Text>
                <Image
                    source={require('../../assets/shape-1.png')}
                    style = {{resizeMode: 'contain',aspectRatio: 1.5, flex: 1, marginTop: 5}}
                />
            </TouchableOpacity>
        </View >

    );

}
