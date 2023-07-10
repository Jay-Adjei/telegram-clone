import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  FlatList,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import Message from "../components/message";
import messages from "../../assets/data/messages.json";
import InputBox from "../components";

const ChatScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);
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
  },
  list: {
    padding: 10,
  },
});

export default ChatScreen;
