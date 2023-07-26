// importing the necessary components and modules
import ChatScreen from "../screens/ChatScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import HomeDrawer from "./DrawerNavigator";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { HeaderButtons } from "react-navigation-header-buttons";

// creating a native stack navigator
const stack = createNativeStackNavigator();

// defining the home stack component
const HomeStack = () => {
  // defining a custom header button
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
      style={{ flex: 1 }} // Styling for the navigator (not typically used for a navigator)
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0088cc", // Styling for the header background color
        },
      }}
    >
      {/* Screen for the "Chats" route */}
      <stack.Screen
        name="Chats" // Name of the route
        component={HomeDrawer} // Component to render for this route
        options={{
          title: "Telegram", // Title to display in the header
          headerTintColor: "white", // Styling for the header text color
          headerShown: false, // Hide the header for this screen (not shown)
        }}
      />
      <stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerTintColor: "white",
          headerStyle: {
            height: 50, // Adjust the height as desired
            backgroundColor: "#0088cc",
          },

          // Custom header button for the "Chat" screen
          headerRight: () => [
            // The call button
            <MaterialIcons
              key="Callicon"
              name="call"
              size={24}
              color="white"
              style={{ marginRight: 20 }}
            />,
            // The Menu button
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

export default HomeStack;
