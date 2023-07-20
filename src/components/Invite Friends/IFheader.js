import { View, Text, TextInput, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";

export default function Header({ selectedContacts }) {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <TextInput
          value={selectedContacts.join(", ")}
          placeholder="Search contacts"
          style={styles.text}
        />
      </View>
      <View style={styles.share}>
        <Entypo name="share" size={24} color="gray" />
        <Text style={{ paddingLeft: 30, fontSize: 17 }}>Share Telegram...</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  maincontainer: { flex: 1 },
  container: {
    backgroundColor: "#FFFFFF",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgary",
    height: 50,
  },
  text: {
    alignSelf: "flex-start",
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 15,
  },
  share: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});
