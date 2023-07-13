import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ChatScreen from "./src/screens/ChatScreen";
import Navigator from "./src/Navigation";
import NewGroupScreen from "./src/screens/NewGroupScreen";
import ContactsScreen from "./src/screens/ContactsScreen";
import CallsScreen from "./src/screens/CallsScreen";
import PeopleNearbyScreen from "./src/screens/PeopleNearbyScreen";
import SavedMessagesScreen from "./src/screens/SavedMessagesScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import InviteFriendsScreen from "./src/screens/InviteFriendsScreen";
import TelegramFeatures from "./src/screens/TelegramFeatures";
import ChatListItem from "./src/components/ChatListItem";
import ChatsScreen from "./src/screens/ChatsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo, AntDesign } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
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
        }}
      >
        <Drawer.Screen
          name="chats"
          component={DrawerRouts}
          options={{
            title: "Telegarm",
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

function DrawerRouts() {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <stack.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          title: "Telegarm",
          headerTintColor: "white",
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
}

const styles = StyleSheet.create({
  menu: {
    marginRight: 30,
  },
  search: {},
});
export default App;
