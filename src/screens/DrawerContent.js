import React from "react";
import NewGroupScreen from "./NewGroupScreen";
import ContactsScreen from "./src/screens/ContactsScreen";
import CallsScreen from "./src/screens/CallsScreen";
import PeopleNearbyScreen from "./src/screens/PeopleNearbyScreen";
import SavedMessagesScreen from "./src/screens/SavedMessagesScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import InviteFriendsScreen from "./src/screens/InviteFriendsScreen";
import TelegramFeatures from "./src/screens/TelegramFeatures";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import ChatsScreen from "./ChatsScreen";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
export default DrawerContent;
