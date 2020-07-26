import 'react-native-gesture-handler';
import * as React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const slides = [
  {
    key: '1',
    title: 'Hello All',
    text: 'Say something cool',
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: ' Be Cool',
    text: 'Other cool stuff',
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: 'Let us Start',
    text: 'We are already cool!',
    backgroundColor: '#22bcb5',
  }
];

export default class Chapter2 extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showSlides: true
    }
  }

  renderSlide = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showSlides: false });
  }

  

  render() {
    if (!this.state.showSlides) {
      return <View style={styles.container}>
        <Text style= {styles.text}>
          You are Home!!
        </Text>


      </View>;
    } else {
      return <AppIntroSlider
       showSkipButton
       renderItem={this.renderItem} 
       slides={slides} 
       onDone={this.onDone}/>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16
  }
});
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Bab 2</Text>
//         </View>
//     );
// }