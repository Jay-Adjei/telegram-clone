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
import {
  Ionicons,
  MaterialIcons,
  AntDesign,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
import CustomDrawer from "./CustomDrawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { RotateOutUpLeft } from "react-native-reanimated";

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
          drawerIcon: () => <AntDesign name="home" size={24} color="gray" />,
          drawerStatusBarAnimation: "slide",
          headerRight: () => (
            <Ionicons
              name="search"
              size={24}
              color="white"
              style={{ marginRight: 20 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="NewGroupScreen"
        component={NewGroupScreen}
        options={{
          title: "New Group",
          headerTintColor: "white",
          drawerIcon: () => <Feather name="users" size={24} color="gray" />,
        }}
      />
      <Drawer.Screen
        name="ContactsScreen"
        component={ContactsScreen}
        options={{
          drawerLabel: "Contacts",
          title: "Contacts",
          headerTintColor: "white",
          drawerIcon: () => <Feather name="user" size={24} color="gray" />,
        }}
      />
      <Drawer.Screen
        name="CallsScreen"
        component={CallsScreen}
        options={{
          drawerLabel: "Calls",
          title: "Calls",
          headerTintColor: "white",
          drawerIcon: () => (
            <MaterialIcons name="call" size={24} color="gray" />
          ),
        }}
      />
      <Drawer.Screen
        name="People Nearby"
        component={PeopleNearbyScreen}
        options={{
          drawerLabel: "People Nearby",
          headerShown: false,
          drawerIcon: () => (
            <MaterialIcons name="person-pin-circle" size={24} color="gray" />
          ),
        }}
      />
      <Drawer.Screen
        name="Saved Messages"
        component={SavedMessagesScreen}
        options={{
          drawerLabel: "Saved Messages",
          title: "Saved Messages",
          headerTintColor: "white",
          drawerIcon: () => (
            <FontAwesome name="bookmark-o" size={24} color="gray" />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          headerTintColor: "white",
          drawerIcon: () => (
            <Ionicons name="md-settings-outline" size={24} color="gray" />
          ),
        }}
      />

      <Drawer.Screen
        name="Invite Friends"
        component={InviteFriendsScreen}
        options={{
          drawerLabel: "Invite Friends",
          title: "Invite Friends",
          headerTintColor: "white",
          drawerIcon: () => (
            <Feather
              name="user-plus"
              size={24}
              color="gray"
              style={{ transform: [{ scaleX: -1 }] }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Telegram Features"
        component={TelegramFeatures}
        options={{
          drawerLabel: "Telegram Features",
          title: "Telegram Features",
          headerTintColor: "white",
          drawerIcon: () => (
            <AntDesign name="questioncircleo" size={24} color="gray" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({});

export default HomeDrawer;
