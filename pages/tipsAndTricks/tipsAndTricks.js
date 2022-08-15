import { Text, View, StyleSheet, Button, Image} from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';


export function TipsAndTricks() {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <Text style = {styles.welcomeback}>Welcome back,</Text>
        <View style = {styles.davidContainer}>
          <View style = {{flex: 7}}>
            <Text style = {styles.david}>David!</Text>
          </View>
          <View style = {{flex: 1, felxDirection: 'row', justifyContent: 'flex-start', paddingRight: 100}}>
            <Image source = {require('../../assets/battery1.png')} style = {styles.charging1}   />
          </View>
          <View style = {{flex: 10}}>

          </View>
        </View>     
      </View>
      <View style = {styles.secoundContainer}>
        <Text style = {styles.mostPopular}>Most popular</Text>
        <View style={styles.insideSecoundContainer}>
          <View style = {styles.tipsContainer}>
            <View style = {{flex: 1}}>
              <Text style = {styles.tips}>Tips and tricks</Text>
              <Text style  = {styles.battery}>for battery health</Text>
            </View>
            <View style = {{flex: 1}}>
              <Button title='see now'/>
            </View>
          </View>
          <View style = {{justifyContent:'center', paddingBottom: 20, paddingRight: 20}}>
            <Image source = {require('../../assets/battery2.png')} style = {styles.image2}/>
          </View>
        </View>
      </View>
      <View style = {styles.thirdContainer}>
        <View style = {{flexDirection: 'row', alignContent: 'space-between'}}>
          <View>
            <Text style = {styles.mostPopular}>Others</Text>
          </View>
          <View style = {{paddingLeft: 200}}>
            <Button title = 'View all'/>
          </View>
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
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'center',
    flex: 1,
    backgroundColor: '#fff'
  },
  firstContainer: {
    flex: 1,
    paddingBottom: 10
  },
  secoundContainer: {
    flex: 1,
    paddingBottom: 50,
    width: 325,
    height: 400,
    justifyContent: 'center'
  },
  insideSecoundContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    backgroundColor: '#D0F9C9',
    borderRadius: 25,
    height: 200
  },
  thirdContainer: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignContent: 'center'
  },
  tipsContainer: {
    paddingTop: 40,
    paddingBottom: 20,
    justifyContent: 'center',
    alignContent: 'stretch',
    paddingLeft: 25
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
    justifyContent: 'flex-start',
    alignContent: 'center'
  },
  charging1: {
    flex: 1,
    width: '200%',
    height: '200%',
    resizeMode: 'center'
  },
  mostPopular: {
    color: 989898,
    fontSize: 20
    
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
  },
  image2: {
    width: 100,
    height: 100
  }
})