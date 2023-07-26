import ChatScreen from "../screens/ChatScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { StyleSheet } from "react-native";
import HomeDrawer from "./DrawerNavigator";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { HeaderButtons } from "react-navigation-header-buttons";
const stack = createNativeStackNavigator();

const HomeStack = () => {
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
        },
      }}
    >
      <stack.Screen
        name="Chats"
        component={HomeDrawer}
        options={{
          title: "Telegarm",
          headerTintColor: "white",
          headerShown: false,
        }}
      />
      <stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerTintColor: "white",
          headerStyle: {
            height: 50, // Adjust the height as desired
            backgroundColor: "#229ED9",
          },
          headerRight: () => [
            <MaterialIcons
              key="Callicon"
              name="call"
              size={24}
              color="white"
              style={{ marginRight: 20 }}
            />,
            <MaterialCommunityIcons
              key="Dotsicon"
              name="dots-vertical"
              size={24}
              color="white"
            />,
          ],
        }}
      />
    </stack.Navigator>
  );
};

const styles = StyleSheet.create({});
export default HomeStack;
