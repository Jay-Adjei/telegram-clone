import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import {
  useSafeAreaInsets,
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";
import ChatScreen from "./ChatScreen";

const Top = () => {
  const insets = useSafeAreaInsets();
  return (
    <View>
      <AppBar
        style={{ paddingTop: insets.top }}
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
      />
    </View>
  );
};

const AppProvider = () => {
  return (
    <SafeAreaProvider>
      <Top />
    </SafeAreaProvider>
  );
};

export default AppProvider;
