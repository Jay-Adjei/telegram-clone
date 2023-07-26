import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ChatScreen from "./src/screens/ChatScreen";
import NewGroupScreen from "./src/screens/NewGroupScreen";
import ChatsScreen from "./src/screens/ChatsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";

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
            backgroundColor: "#0088cc",
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
            title: "Telegram",
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
          title: "Telegram",
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
