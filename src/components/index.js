// importing necessary components and modules
import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import { SimpleLineIcons, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const InputBox = () => {
  const [newMessage, setNewMessage] = useState("");

  const OnSend = () => {
    console.warn("Sending a new message", newMessage);
    setNewMessage("");
  };
  return (
    <View style={styles.container}>
      {/* icon */}
      <SimpleLineIcons
        name="emotsmile"
        size={30}
        color={"gray"}
        style={styles.emoji}
      />
      {/* input box */}
      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        placeholder="Message"
        style={styles.TextInput}
      />
      {/* group the attachment and mic icons and specify a boolean expression using the onchange function */}
      {/* icon */}
      {newMessage ? (
        <Ionicons
          key="send"
          onPress={OnSend}
          style={styles.send}
          name="send"
          size={24}
          color="#0088cc"
        />
      ) : (
        <>
          <Entypo
            key="attachment"
            name="attachment"
            size={30}
            color="gray"
            style={styles.attach}
          />
          <Feather
            key="mic"
            name="mic"
            size={30}
            color="gray"
            style={styles.mic}
          />
        </>
      )}
    </View>
  );
};

// styling for the input box and icons
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  emoji: {
    padding: 10,
  },
  TextInput: {
    flex: 1,
    padding: 5,
  },
  attach: {
    padding: 10,
  },
  mic: {
    padding: 10,
  },
  send: {
    padding: 5,
  },
});

export default InputBox;
