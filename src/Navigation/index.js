import { NavigationContainer } from "@react-navigation/native";
import ChatScreen from "../screens/ChatScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatsScreen from "../screens/ChatsScreen";
import * as React from "react";
import { Entypo, EvilIcons, Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
const stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#229ED9",
          },
        }}
      >
        <stack.Screen
          name="Chats"
          component={ChatsScreen}
          options={{
            title: "Telegram",
            headerTintColor: "white",
            headerLeft: () => (
              <Entypo
                name="menu"
                size={30}
                color={"white"}
                style={styles.menu}
              />
            ),
            headerRight: () => (
              <Ionicons
                name="search"
                size={30}
                color={"white"}
                style={styles.search}
              />
            ),
          }}
        />
        <stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            headerTintColor: "white",
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  menu: {
    marginRight: 30,
  },
  search: {},
});

export default Navigator;
