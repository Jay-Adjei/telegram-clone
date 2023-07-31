// import necessary components
import { StatusBar } from "expo-status-bar"; //importing status bar from expo
import { StyleSheet } from "react-native"; // importing necessary components from react-native
import React from "react"; //importing react
import { NavigationContainer } from "@react-navigation/native"; //importing navigation container from react navigation
import HomeStack from "./src/Navigation"; //importing the home stack from the navigation folder
import LogInScreen from "./src/screens/LogInScreen";
import CountryScreen from "./src/screens/CountryScreen";
import Onboarding from "./src/components/Onboarding";

// Define the main component of the app
const App = () => {
  return (
    // Wrapping the main component with NavigationContainer to enable navigation
    <NavigationContainer style={styles.container}>
      {/* Setting the status bar to be white */}
      <StatusBar style="light" />
      {/* Rendering the HomeStack component from navigation */}
      {/* <HomeStack /> */}
      {/* <LogInScreen /> */}
      <HomeStack />
      {/* <CountryScreen /> */}
      {/* <Onboarding /> */}
    </NavigationContainer>
  );
};

// making styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1, // The container will take up all available space
    alignItems: "center", // Content will be aligned horizontally in the center
    justifyContent: "center", // Content will be aligned vertically in the center
  },
});

// Export the main component as the default export of the module
export default App;
