// import necessary components
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./src/Navigation";

// Define the main component of the app
const App = () => {
  return (
    // Wrapping the main component with NavigationContainer to enable navigation
    <NavigationContainer style={styles.container}>
      <StatusBar style="light" />
      <HomeStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
