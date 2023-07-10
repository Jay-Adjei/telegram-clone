import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  FlatList,
} from "react-native";
import React from "react";
import Message from "../components/message";
import messages from "../../assets/data/messages.json";
import InputBox from "../components";

const ChatScreen = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/736x/3d/8c/2f/3d8c2f2c82c1c9ef1e27be645cd1aa17.jpg",
      }}
      style={styles.uri}
    >
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
        style={styles.list}
      />
      <InputBox />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  uri: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  list: {
    padding: 10,
  },
});

export default ChatScreen;
