import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
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
import ChatsScreen from "../screens/ChatsScreen";
import { AntDesign } from "@expo/vector-icons";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();
function HomeDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="chats"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#FFFFFF",
          width: 300,
        },
        headerStyle: {
          backgroundColor: "#229ED9",
        },
        drawerLabelStyle: {
          fontWeight: "bold",
        },
        title: "Telegram",
      }}
    >
      <Drawer.Screen
        name="chats"
        component={ChatsScreen}
        options={{
          drawerLabel: "Home",
          headerTintColor: "white",
          drawerIcon: () => {
            <AntDesign name="home" size={24} color="black" />;
          },
        }}
      />
      <Drawer.Screen
        name="NewGroupScreen"
        component={NewGroupScreen}
        options={{
          title: "New Group",
          headerTintColor: "white",
        }}
      />
      <Drawer.Screen
        name="ContactsScreen"
        component={ContactsScreen}
        options={{
          drawerLabel: "Contacts",
          title: "Contacts",
          headerTintColor: "white",
        }}
      />
    </Drawer.Navigator>
  );
}

export default HomeDrawer;
