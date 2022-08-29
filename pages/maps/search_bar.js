
import { View, TouchableOpacity, Text, Animated } from 'react-native';
import { views } from './styles';
import { Image } from 'react-native';
import { useState } from 'react';
function toggleSearchBar(visible) {
    if (visible == 0) {
        return { left: 0 };
    }
    return [views.styleOfSearchBar, { width: 200, borderWidth: 0 }];
}
function generateSearchBar(visible) {
    if (visible == 0)
        return (<View></View>);

    return (
        <View style={{ flexDirection: "row", alignSelf: 'center', justifyContent: 'center' }}>
            <Text
                style={{ marginRight: 20, alignSelf: 'center', justifyContent: 'center', marginTop: "5%" }}
            > Search location... </Text>
        </View>
    );
}
function styleOfToggleButton(visible) {
    var closedSearch = require('../../assets/navigators/go_forward.png');
    var openedSearch = require('../../assets/navigators/go_back.png');
    // visible == 0 => the search bar is closed
    if (visible == 0) {
        return (closedSearch);
    }
    return (openedSearch);
}


export function LoadSearchBar(navigation, stationsArray) {
    const [visible, setVisibility] = useState(1);

    return (
        <View style={{ position: 'absolute', top: 10, left: 0, width: '100%', width: 100, height: 100, marginTop: 10, flexDirection: 'row' }}
        >
            <TouchableOpacity
                style={toggleSearchBar(visible)}
                onPress={() => navigation.navigate('SearchBarActivity', { itemId: 86, arr: stationsArray })}
            >

                {generateSearchBar(visible)}

            </TouchableOpacity>
            <TouchableOpacity
                style={{ width: 45, height: 45, alignSelf: 'flex-start', alignItems: "center", justifyContent: 'center', borderTopRightRadius: 50, borderBottomRightRadius: 50, backgroundColor: 'white' }}
                onPress={() => setVisibility(!visible)}
            >
                <Image
                    source={require('../../assets/shape-1.png')}
                    style={{ width: 20, height: 20, marginTop: "5%" }}
                />
            </TouchableOpacity>
        </View >

    );

}
