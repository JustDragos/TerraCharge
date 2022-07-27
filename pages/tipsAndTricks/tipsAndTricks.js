import { Text, View, StyleSheet, Button, Image} from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';


export function TipsAndTricks() {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <Text style = {styles.welcomeback}>Welcome back,</Text>
        <View style = {styles.davidContainer}>
          <Text style = {styles.david}>David!</Text>
          <Image source = {require('../../assets/charging 1.png')} style = {styles.charging1}   />
        </View>     
      </View>
      <View style = {styles.secoundContainer}>
        <Text style = {styles.mostPopular}>Most popular</Text>
        <View style={{    backgroundColor: '#41EF22',}}>
          <View style = {styles.tipsContainer}>
            <Text style = {styles.tips}>Tips and tricks</Text>
            <Text style  = {styles.battery}>for battery health</Text>
            <Button title='see now'/>
          </View>
          <View>
            <Image source = {require('../../assets/question (1) 1.png')}/>
          </View>
        </View>
      </View>
      <View style = {styles.thirdContainer}>
        <View>
          <Text>Others</Text>
          <Button title = 'View all'/>
        </View>
        <View>

        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'center',
    width: 400,
    height: 600,
    backgroundColor: '#fff'
  },
  firstContainer: {
    flex: 1,
    paddingBottom: 10
  },
  secoundContainer: {
    flex: 1,
    paddingBottom: 50
  },
  thirdContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  tipsContainer: {
    paddingTop: 5,
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    paddingLeft: 20
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
    width: '200%',
    height: '200%',
    resizeMode: 'center'
  },
  mostPopular: {
    color: 989898,
    fontSize: 15
    
  },
  seeNow: {

  },
  tips: {
    color: 393939,
    fontSize: 20,
    fontWeight: 'bold'
  },
  battery: {
    color: 393939,
    fontSize: 18,
  }
})