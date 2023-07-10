import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChatListItem from "./src/components/ChatListItem";
import ChatsScreen from "./src/screens/ChatsScreen";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import ChatScreen from "./src/screens/ChatScreen";

const App = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <ChatScreen />
      <StatusBar style="auto" />
    </View>
  );
};

const apphither = () => {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },
});

export default apphither;
/*<AppBar
        style={{ paddingTop: insets.top, backgroundColor: "#30A3E6" }}
        title="Telgram"
        leading={(props) => (
          <IconButton
            icon={(props) => <Icon name="menu" {...props} />}
            {...props}
          />
        )}
        trailing={(props) => (
          <HStack>
            <IconButton
              icon={(props) => <Icon name="magnify" {...props} />}
              {...props}
            />
          </HStack>
        )}
      />*/
