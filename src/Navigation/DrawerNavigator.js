import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
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
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import CustomDrawer from "./CustomDrawer";
import SettingsStack from "./settingsstack";

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
          headerRight: () => (
            <View style={styles.headerRightContainer}>
              <MaterialIcons
                name="search"
                size={24}
                color="white"
                style={styles.iconStyle}
              />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color="white"
                style={styles.iconStyle}
              />
            </View>
          ),
          headerLeft: () => (
            <View style={styles.bookmarkcontainer}>
              <Feather name="bookmark" size={24} color="white" />
            </View>
          ),
          drawerIcon: () => (
            <FontAwesome name="bookmark-o" size={24} color="gray" />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          drawerLabel: "Settings",
          headerShown: false,
          title: "Settings",
          headerTintColor: "white",
          headerLeft: () => null,
          headerRight: () => (
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
              <View style={styles.photoicon}>
                <MaterialIcons name="add-a-photo" size={24} color="gray" />
              </View>
            </View>
          ),
          headerTitle: () => (
            <>
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
            </>
          ),
          drawerIcon: () => (
            <Ionicons name="md-settings-outline" size={24} color="gray" />
          ),
          headerStyle: {
            height: 150, // Adjust the height as needed to accommodate the content
            backgroundColor: "#2F95D6", // Add your desired background color
          },
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
const styles = StyleSheet.create({
  bookmarkcontainer: {
    backgroundColor: "#7DA2EC",
    borderRadius: 24,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 16,
  },
  iconStyle: {
    marginLeft: 16,
  },
  headerRightContainer: {
    flexDirection: "row",
    marginRight: 16,
  },
  headerRightContainer_Settings: {
    flexDirection: "row",
    bottom: 50,
    padding: 5,
  },
  photoicon: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 25,
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    top: 55,
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
  icon: {
    marginTop: 20,
    marginLeft: 180,
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

export default HomeDrawer;
