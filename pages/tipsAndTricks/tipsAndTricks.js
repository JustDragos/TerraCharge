import { Text, View, StyleSheet } from 'react-native';


export function TipsAndTricks() {
  return (
    <View style={styles.container}>
      <Text>Ba merge aplicatia!</Text>
    </View>
  );
}
/*Salut Matei, mai jos poti crea stiluri pt orice element, ca sa nu le scrii chiar la 
view-uri. astea ajuta la refolosirea codului
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})