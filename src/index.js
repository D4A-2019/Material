import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MaterialsScreen from './materialsScreen';
import AboutScreen from './aboutScreen';

import Chapter1 from './contents/chapter1';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Materi')}>Materi</Button>
      <Button mode="contained" onPress={() => navigation.navigate('About')}>About</Button>
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
        <Stack.Screen name="Chapter1" component={Chapter1} options={{ title: 'Konsep Ketuhanan', headerTitleAlign: 'center' }} />
        
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About', headerTitleAlign: 'center' }} />
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
