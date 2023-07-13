import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const NewGroupInputBox = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Who would you like to add?" style={styles.text} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "lightgary",
    height: 50,
  },
  text: {
    alignSelf: "flex-start",
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 15,
  },
});

export default NewGroupInputBox;
