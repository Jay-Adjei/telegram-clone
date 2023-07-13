import ChatScreen from "../screens/ChatScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import NewGroupScreen from "../screens/NewGroupScreen";
import ContactsScreen from "../screens/ContactsScreen";
import CallsScreen from "../screens/CallsScreen";
import PeopleNearbyScreen from "../screens/PeopleNearbyScreen";
import SavedMessagesScreen from "../screens/SavedMessagesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import InviteFriendsScreen from "../screens/InviteFriendsScreen";
import TelegramFeatures from "../screens/TelegramFeatures";
import ChatListItem from "../components/ChatListItem";
import HomeDrawer from "./DrawerNavigator";

const stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <stack.Navigator
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
        }}
      />
    </stack.Navigator>
  );
};

const styles = StyleSheet.create({
  menu: {
    marginRight: 30,
  },
  search: {},
});

export default HomeStack;
