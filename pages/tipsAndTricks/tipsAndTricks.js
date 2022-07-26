import { Text, View, StyleSheet, Button, Image} from 'react-native';


export function TipsAndTricks() {
  return (
    <View style={styles.container}>
      <View>
        <Text style = {styles.welcomeback}>Welcome back,</Text>
        <View style = {styles.davidContainer}>
          <Text style = {styles.david}>David!</Text>
          <Image source = {require('../../assets/charging 1.png')} style = {styles.charging1}   />
        </View>     
      </View>
      <View></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50
  },
  welcomeback: {
    color: 393939,
    fontSize: 30,
    fontWeight: 'bold'
  },
  david: {
    color: 393939,
    fontSize: 27,
  },
  davidContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  charging1: {
    flex: 1,
    width: '100%',
    height: '100%',
  }
})