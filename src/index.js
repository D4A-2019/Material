import "react-native-gesture-handler";
import React, { Component, useState } from "react";

import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';

import MaterialsScreen, { titles } from "./materialsScreen";
import AboutScreen from "./aboutScreen";

import * as drawerChapter from "./contents/drawer_navigation/drawerBundle";

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={require("./../assets/images/icons/Icon-256px.png")}
        />
        <Button mode="contained" onPress={() => this.props.navigation.navigate("Materi")}>
          Materi
        </Button>
        <Button mode="contained" onPress={() => this.props.navigation.navigate("About")}>
          About
        </Button>
      </View>
    );
  }
}

const Stack = createStackNavigator();

export default class App extends Component {
  // method to cache all resources (images and audios)
  async _cacheResourcesAsync() {
    // images used in this app
    const images = [
      require("./../assets/images/icons/Icon-256px.png"),
      require("./../assets/images/instagramLogo.png")
    ]

    const cacheImages = images.map(image => {  
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  }

  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync = {this._cacheResourcesAsync}
          onFinish = {() => this.setState({ isReady: true })}
          onError = {console.warn}
        />
      );
    }

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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
