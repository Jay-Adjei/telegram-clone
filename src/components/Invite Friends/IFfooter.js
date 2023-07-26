import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function Footer({ selectedContacts }) {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.bottomContainer}>
        <Text
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          {selectedContacts.length > 0
            ? `${selectedContacts.length} Invite To Telegram `
            : "Select some contacts to invite"}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  maincontainer: { flex: 1 },
  bottomContainer: {
    backgroundColor: "#46C635",
    padding: 7,
  },
});
