// import necessary modules and components
import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime); // Extend dayjs with the relativeTime plugin

const Message = ({ message }) => {
  // Function to check if the message belongs to the current user
  const isMyMessage = () => {
    return message.user.id === "u1"; // Assuming the current user's id is "u1"
  };

  // Function to check if the message is the first one in the chat
  const isFirstMessage = () => {
    return message.id === "m13"; // Assuming the first message's id is "m13"
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage() ? "#F0FDDF" : "white", // Set background color based on whether it's the user's message or not
          alignSelf: isMyMessage() ? "flex-end" : "flex-start", // Align the message to the right if it's the user's message, otherwise align to the left
          marginTop: isFirstMessage() ? StatusBar.currentHeight : null, // Add marginTop to the first message to accommodate the status bar height
        },
      ]}
    >
      {/* display the message text and time */}
      <Text style={styles.txt}>{message.text}</Text> 
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 15,
    maxWidth: "80%",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 4,
  },
  time: {
    color: "gray",
    alignSelf: "flex-end",
  },
});

export default Message;
