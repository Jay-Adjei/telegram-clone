import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./src/Navigation";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <HomeStack />
    </NavigationContainer>
  );
};

export default App;
