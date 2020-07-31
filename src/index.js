import "react-native-gesture-handler";
import React, { Component, useState } from "react";

import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Button } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MaterialsScreen, { titles } from "./materialsScreen";
import AboutScreen from "./aboutScreen";

import * as Chapter from "./contents/chapterBundle";
import * as drawerChapter from "./contents/drawer_navigation/drawerBundle";
import chapterNavigation from "./contents/drawer_navigation/chapterNavigation";

const {width: WIDTH} = Dimensions.get('window');


class HomeScreen extends Component {

  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

  render() {
    return (
      <View style={styles.backgroundContainer}>
        <Image
          source={require("./../assets/images/icons/Icon-256px.png")}
        />
        <Button style={{marginBottom: 20, width: 300}} mode="contained" color="#fff" onPress={() => this.props.navigation.navigate("Materi")}>
          Materi
        </Button>
        <Button style={{marginBottom: 20, width: 300}}mode="contained" color="#fff" onPress={() => this.props.navigation.navigate("About")}>
          About
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer:{
    flex: 1,
    backgroundColor: '#007f5f',
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Stack = createStackNavigator();

function App() {
  const headerTitle = 'Materi Agama Islam';

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Materi"
          component={MaterialsScreen}
          options={{ title: "Daftar Materi", headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter1"
          component={drawerChapter.chapterNavigation}
          options={{ title: headerTitle, headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter2"
          component={drawerChapter.drawerChapter2}
          options={{ title: headerTitle, headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter3"
          component={drawerChapter.drawerChapter3}
          options={{ title: headerTitle, headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter4"
          component={drawerChapter.drawerChapter4}
          options={{ title: headerTitle, headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter5"
          component={drawerChapter.drawerChapter5}
          options={{ title: headerTitle, headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter6"
          component={drawerChapter.drawerChapter6}
          options={{ title: headerTitle, headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter7"
          component={drawerChapter.drawerChapter7}
          options={{ title: headerTitle, headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Chapter8"
          component={drawerChapter.drawerChapter8}
          options={{ title: headerTitle, headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter9"
          component={drawerChapter.drawerChapter9}
          options={{ title: headerTitle, headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter10"
          component={drawerChapter.drawerChapter10}
          options={{ title: headerTitle, headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter11"
          component={drawerChapter.drawerChapter11}
          options={{ title: headerTitle, headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter12"
          component={drawerChapter.drawerChapter12}
          options={{ title: headerTitle, headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter13"
          component={drawerChapter.drawerChapter13}
          options={{ title: headerTitle, headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter14"
          component={drawerChapter.drawerChapter14}
          options={{ title: headerTitle, headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter15"
          component={drawerChapter.drawerChapter15}
          options={{ title: headerTitle, headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "About", headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;