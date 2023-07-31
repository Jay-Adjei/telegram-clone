import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const Countries = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text>{item.name}</Text>
        <Text style={styles.code}>{item.code}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  image: {
    height: 30,
    width: 30,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between", // Add this to push the code to the right end
    alignItems: "center",
    paddingLeft: 10,
  },
  code: {
    textAlign: "right", // Add this to right-align the country code
    marginLeft: "auto", // Add this to push the code to the right end
    color: "#0088cc",
  },
});
export default Countries;
