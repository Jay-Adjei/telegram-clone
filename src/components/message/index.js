import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Message = ({ message }) => {
  const isMyMessage = () => {
    return message.user.id === "u1";
  };
  const isFirstMessage = () => {
    return message.id === "m13";
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage() ? "#e2f7c2" : "white",
          alignSelf: isMyMessage() ? "flex-end" : "flex-start",
          marginTop: isFirstMessage() ? StatusBar.currentHeight : null,
        },
      ]}
    >
      <Text style={styles.txt}>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    // alignSelf: "flex-start",
    // marginTop: StatusBar.currentHeight,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
  },
  time: {
    color: "gray",
    alignSelf: "flex-end",
  },
});

export default Message;
