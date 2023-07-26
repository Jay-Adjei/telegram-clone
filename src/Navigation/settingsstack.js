import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { HeaderButtons } from "react-navigation-header-buttons";
import SettingsScreen from "../screens/SettingsScreen";
import BioScreeen from "../screens/BioScreeen";
import UsernameScreen from "../screens/UsernameScreen";
import ChangeNumberScreen from "../screens/ChangeNumberScreen";
const stack = createNativeStackNavigator();

const CustomHeader = () => {
  return (
    <View
      style={{ height: 120, backgroundColor: "#229ED9", position: "relative" }}
    >
      <View>
        <View style={styles.headerRightContainer_Settings}>
          <Ionicons name="ios-qr-code" size={24} color="white" />
          <Ionicons
            name="search"
            size={24}
            color="white"
            style={{ paddingLeft: 20 }}
          />
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color="white"
            style={{ paddingLeft: 20 }}
          />
        </View>
        <View style={[styles.photoicon]}>
          <MaterialIcons name="add-a-photo" size={24} color="gray" />
        </View>
      </View>
      <View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{
                uri: "https://c4.wallpaperflare.com/wallpaper/611/838/413/spiderman-hd-4k-superheroes-wallpaper-thumb.jpg",
              }}
              style={styles.image}
            />
          </View>
          <View>
            <Text style={styles.name}>Mr. Adjei</Text>
            <Text style={styles.status}>Online</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const SettingsStack = () => {
  const CustomHeaderButton = (props) => {
    return (
      <HeaderButtons
        {...props}
        IconComponent={MaterialIcons}
        iconSize={24}
        color="white"
      />
    );
  };
  return (
    <stack.Navigator
      style={{ flex: 1 }}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#229ED9",
          position: "relative",
          overflow: "visible",
        },
      }}
    >
      <stack.Screen
        name="settings"
        component={SettingsScreen}
        options={{ header: () => <CustomHeader /> }}
      />
      <stack.Screen
        name="bio"
        component={BioScreeen}
        options={{
          headerStyle: {
            backgroundColor: "#229ED9",
            height: 300,
          },
        }}
      />
      <stack.Screen
        name="Username"
        component={UsernameScreen}
        options={{
          headerStyle: {
            backgroundColor: "#229ED9",
            height: 300,
          },
        }}
      />
      <stack.Screen
        name="Number"
        component={ChangeNumberScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#229ED9",
            height: 300,
          },
        }}
      />
    </stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerRightContainer_Settings: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "flex-end",
    top: 18,
  },
  photoicon: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 25,
    height: 50,
    width: 50,
    top: 95,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginTop: 5,
    marginLeft: 15,
  },
  name: {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 7,
    color: "white",
  },
  status: {
    color: "white",
    marginLeft: 20,
    marginBottom: 10,
  },
});
export default SettingsStack;
