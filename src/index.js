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

    const audioAssetFilePath = "./../assets/audios/"
    const audioFileNames = [
      "Al-Ahzab-5.mp3",
      "Al-Ahzab-22.mp3",
      "Al-Ahzab-72.mp3",
      "Al-Anam-38.mp3",
      "Al-Anam-54.mp3",
      "Al-Anam-108.mp3",
      "Al-Anbiya-101.mp3",
      "Al-Anbiya-107.mp3",
      "Al-Araf-31.mp3",
      "Al-Araf-56.mp3",
      "Al-Araf-172.mp3",
      "Al-Araf-199.mp3",
      "Al-Baqarah-(256-257).mp3",
      "Al-Baqarah-8.mp3",
      "Al-Baqarah-30.mp3",
      "Al-Baqarah-143.mp3",
      "Al-Baqarah-147.mp3",
      "Al-Baqarah-177.mp3",
      "Al-Baqarah-208.mp3",
      "Al-Baqarah-256.mp3",
      "Al-Baqarah-274.mp3",
      "Al-Baqarah-283.mp3",
      "Al-Fajr-(27-30).mp3",
      "Al-Hajj-(39-40).mp3",
      "Al-Hajj-54.mp3",
      "Al-Hijr-(28-29).mp3",
      "Al-Hujurat-10.mp3",
      "Al-Hujurat-11.mp3",
      "Al-Hujurat-13.mp3",
      "Al-Isra-(23-24).mp3",
      "Al-Isra-29.mp3",
      "Al-Isra-81.mp3",
      "Al-Jinn-14.mp3",
      "Al-Kafirun-(1-6).mp3",
      "Al-Kahfi-65.mp3",
      "Al-Maidah-2.mp3",
      "Al-Maidah-89.mp3",
      "Al-Mulk-2.mp3",
      "Al-Muminun-(12-13).mp3",
      "Al-Muminun-33.mp3",
      "Al-Qasas-88.mp3",
      "Ali-Imran-14.mp3",
      "Ali-Imran-31.mp3",
      "Ali-Imran-83.mp3",
      "Ali-Imran-103.mp3",
      "Ali-Imran-159.mp3",
      "Ali-Imran-200.mp3",
      "An-Nahl-97.mp3",
      "An-Nisa-1.mp3",
      "An-Nisa-36.mp3",
      "An-Nisa-58.mp3",
      "An-Nisa-59.mp3",
      "An-Nisa-86.mp3",
      "An-Nisa-93.mp3",
      "An-Nur-35.mp3",
      "An-Nur-62.mp3",
      "An-Rahman-(3-4).mp3",
      "Ar-Rum-21.mp3",
      "Ar-Rum-30.mp3",
      "Asy-Syams-(7-11).mp3",
      "At-Taubah-105.mp3",
      "At-Taubah-119.mp3",
      "At-Tin-(4-5).mp3",
      "Az-Zumar-46.mp3",
      "Fussilat-43.mp3",
      "Hud-61.mp3",
      "Luqman-(12-15).mp3",
      "Luqman-18.mp3",
      "Saba-9.mp3",
      "Yunus-25.mp3",
      "Yunus-26.mp3",
      "Yunus-41.mp3",
    ];

    const audios = audioFileNames.map(name => {
      return audioAssetFilePath + name;
    })

    console.log(audios)

    const cacheAudios = audios.map(audio => {
      return Asset.fromModule(audio).downloadAsync();
    });

    return Promise.all([...cacheImages, ...cacheAudios]);
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
