import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Chapter1 from './content';

class Chapter2 extends React.Component {
  render() {
      return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Bab 2</Text>
          </View>
      );
  }
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Materi')}>Materi</Button>
      <Button mode="contained" onPress={() => navigation.navigate('About')}>About</Button>
    </View>
  );
}

function MaterialsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Material Screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Chapter1')}>Bab 1</Button>
      <Button mode="contained" onPress={() => navigation.navigate('Chapter2')}>Bab 2</Button>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Materi Agama', headerTitleAlign: 'center' }} />
        <Stack.Screen name="Materi" component={MaterialsScreen} options={{ title: 'Daftar Materi', headerTitleAlign: 'center' }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About', headerTitleAlign: 'center' }} />
        <Stack.Screen name="Chapter1" component={Chapter1} options={{ title: 'Konsep Ketuhanan', headerTitleAlign: 'center' }} />
        <Stack.Screen name="Chapter2" component={Chapter2} options={{ title: 'Peran', headerTitleAlign: 'center' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
