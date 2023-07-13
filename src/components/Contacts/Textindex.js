import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Feather, EvilIcons } from "@expo/vector-icons";

const TextComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ViceContainer}>
        <View style={styles.subcontainer}>
          <View style={styles.icons}>
            <Feather
              name="user-plus"
              size={24}
              color="black"
              style={{ marginBottom: 10, paddingLeft: 6, color: "gray" }}
            />
            <EvilIcons
              name="location"
              size={24}
              color="black"
              style={{ color: "gray" }}
            />
          </View>
          <View style={styles.Text}>
            <Text style={{ marginLeft: 20, marginBottom: 15 }}>
              Invite friends
            </Text>
            <Text style={{ marginLeft: 20, marginBottom: 10 }}>
              Find People Nearby
            </Text>
          </View>
        </View>
        <View style={styles.Dividertext}>
          <Text style={{ color: "gray", marginLeft: 12, padding: 5 }}>
            Sorted by last seen
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginTop: 3,
  },
  ViceContainer: {},
  subcontainer: { flexDirection: "row", paddingLeft: 10 },
  Text: {
    flexDirection: "column",
  },
  icons: {
    flexDirection: "column",
  },
  Dividertext: {
    backgroundColor: "#EEEDED",
  },
});

export default TextComponent;
