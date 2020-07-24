import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as React from "react";

import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MaterialsScreen, { titles } from "./materialsScreen";
import AboutScreen from "./aboutScreen";

import * as Chapter from "./contents/chapterBundle";

// titles.forEach(function(value, index) {
//   console.log("<Stack.Screen name=\"Chapter" + (index + 1) + "\" component={Chapter.Chapter" + (index + 1) + "} options={{ title: titles[" + index + "], headerTitleAlign: 'center' }} />");
// })

console.disableYellowBox = true;

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate("Materi")}>
        Materi
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate("About")}>
        About
      </Button>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Materi Agama", headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Materi"
          component={MaterialsScreen}
          options={{ title: "Daftar Materi", headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter1"
          component={Chapter.Chapter1}
          options={{ title: titles[1], headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter2"
          component={Chapter.Chapter2}
          options={{ title: titles[2], headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter3"
          component={Chapter.Chapter3}
          options={{ title: titles[3], headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter4"
          component={Chapter.Chapter4}
          options={{ title: titles[4], headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter5"
          component={Chapter.Chapter5}
          options={{ title: titles[5], headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter6"
          component={Chapter.Chapter6}
          options={{ title: titles[6], headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter7"
          component={Chapter.Chapter7}
          options={{ title: titles[7], headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Chapter8"
          component={Chapter.Chapter8}
          options={{ title: titles[8], headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter9"
          component={Chapter.Chapter9}
          options={{ title: titles[9], headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter10"
          component={Chapter.Chapter10}
          options={{ title: titles[10], headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter11"
          component={Chapter.Chapter11}
          options={{ title: titles[11], headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter12"
          component={Chapter.Chapter12}
          options={{ title: titles[12], headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter13"
          component={Chapter.Chapter13}
          options={{ title: titles[13], headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter14"
          component={Chapter.Chapter14}
          options={{ title: titles[14], headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Chapter15"
          component={Chapter.Chapter15}
          options={{ title: titles[15], headerTitleAlign: "center" }}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
