// importing necessary components and modules
import { ImageBackground, StyleSheet, FlatList } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import Message from "../components/message";
import messages from "../../assets/data/messages.json";
import InputBox from "../components";

const ChatScreen = () => {
  const route = useRoute(); // Getting the current route object using useRoute hook
  const navigation = useNavigation(); // Getting the navigation object using useNavigation hook

  // Set the title of the header using the route params whenever the name changes
  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);
  return (
    // background image for the chat screen
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/736x/3d/8c/2f/3d8c2f2c82c1c9ef1e27be645cd1aa17.jpg",
      }}
      style={styles.uri}
    >
      {/* FlatList to render the messages */}
      <FlatList
        data={messages} // Data source for the FlatList, here it's messages
        renderItem={({ item }) => <Message message={item} />} // Render each item using the Message component
        inverted // Invert the list so that the latest messages appear at the bottom
        style={styles.list} // Styling for the FlatList
      />

      {/* Render the InputBox component */}
      <InputBox />
    </ImageBackground>
  );
};

// styling for the chat screen
const styles = StyleSheet.create({
  uri: {
    flex: 1, // the background image will take up all available space
  },
  list: {
    padding: 8, // Add some padding to the chat list
  },
});

export default ChatScreen;
